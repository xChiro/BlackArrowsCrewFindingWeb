import {useEffect, useState, useCallback} from 'react';
import * as signalR from '@microsoft/signalr';
import {useAuth} from "../useAuth.tsx";
import SignalRService from "../../services/SignalRService.ts";
import useToast from "../../components/utilities/notifications/useToast.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import {useNavigate} from "react-router-dom";
import {HubConnection} from "@microsoft/signalr";

interface SignalRConnectionInfo {
    Url: string;
    AccessToken: string;
}

const useSignalR = (): { startConnection: () => void; connection: HubConnection | undefined } => {
    const [start, setStart] = useState(false);
    const {getAccessToken, getUserId} = useAuth();
    const {leaveCrew, isCaptain} = usePlayer();
    const navigate = useNavigate();
    const showToast = useToast();
    const [connection, setConnection] = useState<signalR.HubConnection>();

    const startConnection = useCallback(() => {
        setStart(true);
    }, []);

    useEffect(() => {
            if (!start || !getUserId()) return;

            const createSignalRConnection = async () => {
                const token = getAccessToken();
                const userId = getUserId();
                const signalRService = new SignalRService(token ?? '', userId ?? '');
                const response = await signalRService.negotiate();
                const data: SignalRConnectionInfo = {
                    Url: response.Url,
                    AccessToken: response.AccessToken
                };

                const isUserTheSender = (message: { PlayerId: string }) => {
                    return userId === message.PlayerId;
                };

                const onLeaveCrew = () => {
                    leaveCrew();
                    navigate('/');
                };

                const newConnection = new signalR.HubConnectionBuilder()
                    .withUrl(data.Url, {accessTokenFactory: () => data.AccessToken})
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                newConnection.on('NotifyPlayerJoined', (message: { PlayerId: string }) => {
                    if (isUserTheSender(message)) {
                        return;
                    }

                    showToast("A player joined to your crew.");
                });

                newConnection.on('PlayerLeftCrew', (message: { PlayerId: string }) => {
                    if (isUserTheSender(message)) {
                        return;
                    }

                    showToast("A player left your crew.");
                });

                newConnection.on('CrewMemberKicked', (message: { PlayerId: string, CrewId: string }) => {
                    if (isUserTheSender(message) || isCaptain(message.CrewId, userId ?? '')) {
                        return;
                    }

                    showToast("A player left your crew.");
                });

                newConnection.on('CrewDisbanded', () => {
                    showToast("Your crew has been disbanded by the captain.");
                    onLeaveCrew();
                });

                newConnection.on('KickedFromCrew', () => {
                    showToast("You have been kicked from the crew.");
                    onLeaveCrew();
                });

                await newConnection.start();
                setConnection(newConnection);
                console.log('SignalR Connected.');
            };

            createSignalRConnection();

            return () => {
                if (connection) {
                    connection.stop().then(() => console.log('SignalR Connection stopped.'));
                }
            };
        }, [start]
    );

    return {startConnection, connection};
};

export default useSignalR;