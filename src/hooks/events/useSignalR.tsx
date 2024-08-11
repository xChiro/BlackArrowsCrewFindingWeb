import { useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { useAuth } from "../useAuth.tsx";
import SignalRService from "../../services/SignalRService.ts";
import useCrewEventHandlers from "./useCrewEventHandlers.tsx";

interface SignalRConnectionInfo {
    Url: string;
    AccessToken: string;
}

const useSignalR = () => {
    const { getAccessToken, getUserId } = useAuth();
    const [connection, setConnection] = useState<signalR.HubConnection>();

    const {
        handlePlayerLeft,
        handleCrewMemberKicked,
        handleCrewDisbanded,
        handleKickedFromCrew,
        handlePlayerJoined
    } = useCrewEventHandlers();

    const startConnection = () => {
        if (!connection) {
            createAndStartConnection();
        } else if (isDisconnected(connection)) {
            connection.start();
        }
    };

    const stopConnection = () => {
        if (isConnected(connection)) {
            connection?.stop();
        }
    };

    const createAndStartConnection = async () => {
        const newConnection = await createSignalRConnection();
        newConnection?.start();
    };

    const createSignalRConnection = async () => {
        if (connection) return connection;

        const token = getAccessToken();
        const userId = getUserId();
        const signalRService = new SignalRService(token ?? '', userId ?? '');
        const response = await signalRService.negotiate();
        const data: SignalRConnectionInfo = {
            Url: response.Url,
            AccessToken: response.AccessToken
        };

        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(data.Url, { accessTokenFactory: () => data.AccessToken })
            .withAutomaticReconnect([1000, 10000, 30000, 600000])
            .configureLogging(signalR.LogLevel.Information)
            .build();

        registerSignalREvents(newConnection, userId);

        setConnection(newConnection);
        return newConnection;
    };

    const registerSignalREvents = (newConnection: signalR.HubConnection, userId: string | undefined) => {
        const isCurrentUser = (message: { PlayerId: string }) => userId === message.PlayerId;

        newConnection.on('NotifyPlayerJoined', (message: { PlayerId: string, CitizenName: string }) => {
            handlePlayerJoined(message, isCurrentUser(message));
        });

        newConnection.on('PlayerLeftCrew', (message: { PlayerId: string }) => {
            handlePlayerLeft(message, isCurrentUser(message));
        });

        newConnection.on('CrewMemberKicked', (message: { PlayerId: string }) => {
            handleCrewMemberKicked(message, isCurrentUser(message));
        });

        newConnection.on('CrewDisbanded', () => {
            handleCrewDisbanded();
        });

        newConnection.on('KickedFromCrew', () => {
            handleKickedFromCrew();
        });
    };

    const isDisconnected = (connection: signalR.HubConnection | undefined) =>
        connection && (connection.state === signalR.HubConnectionState.Disconnected || connection.state === signalR.HubConnectionState.Disconnecting);

    const isConnected = (connection: signalR.HubConnection | undefined) =>
        connection && (connection.state === signalR.HubConnectionState.Connected || connection.state === signalR.HubConnectionState.Connecting);

    return { startConnection, connection, stopConnection };
};

export default useSignalR;
