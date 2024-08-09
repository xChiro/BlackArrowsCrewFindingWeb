import {useState} from 'react';
import * as signalR from '@microsoft/signalr';
import {useAuth} from "../useAuth.tsx";
import SignalRService from "../../services/SignalRService.ts";
import useToast from "../../components/utilities/notifications/useToast.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import {useNavigate} from "react-router-dom";
import {HubConnection} from "@microsoft/signalr";
import {useDispatch, useSelector} from "react-redux";
import {ActiveCrew, addMemberToActiveCrew, removeMemberToActiveCrew} from "../../stores/ActiveCrewSlice.ts";

interface SignalRConnectionInfo {
    Url: string;
    AccessToken: string;
}

const useSignalR = (): {
    startConnection: () => void;
    connection: HubConnection | undefined;
    stopConnection: () => void
} => {
    const {getAccessToken, getUserId} = useAuth();
    const {leaveCrew, isCaptain} = usePlayer();
    const navigate = useNavigate();
    const showToast = useToast();
    const [connection, setConnection] = useState<signalR.HubConnection>();
    const activeCrew = useSelector((state: ActiveCrew) => state);
    const dispatch = useDispatch();

    const startConnection = () => {
        if (connection === undefined) {
            createSignalRConnection().then(connection => {
                connection?.start();
            });
        } else {
            if (connection.state === signalR.HubConnectionState.Disconnected || connection.state === signalR.HubConnectionState.Disconnecting) {
                connection?.start();
            }
        }
    };

    const stopConnection = () => {
        if (connection !== undefined && (connection.state === signalR.HubConnectionState.Connected || connection.state === signalR.HubConnectionState.Connecting)) {
            connection?.stop();
        }
    };

    const createSignalRConnection = async () => {
        if (connection !== undefined) return connection;

        const token = getAccessToken();
        const userId = getUserId();
        const signalRService = new SignalRService(token ?? '', userId ?? '');
        const response = await signalRService.negotiate();
        const data: SignalRConnectionInfo = {
            Url: response.Url,
            AccessToken: response.AccessToken
        };

        const isCurrentUser = (message: { PlayerId: string }) => {
            return userId === message.PlayerId;
        };

        const onLeaveCrew = () => {
            leaveCrew();
            navigate('/');
        };

        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(data.Url, {accessTokenFactory: () => data.AccessToken})
            .withAutomaticReconnect([0, 2000, 10000, 30000])
            .configureLogging(signalR.LogLevel.Debug)
            .build();

        newConnection.on('NotifyPlayerJoined', (message: { PlayerId: string, CitizenName: string }) => {
            if (activeCrew.Id !== "") {
                dispatch(addMemberToActiveCrew({
                    Id: message.PlayerId,
                    CitizenName: {
                        Value: message.CitizenName
                    }
                }));
            }

            if (isCurrentUser(message)) {
                return;
            }

            showToast("A player joined to your crew.");
        });

        newConnection.on('PlayerLeftCrew', (message: { PlayerId: string }) => {
            if (activeCrew.Id !== "") {
                dispatch(removeMemberToActiveCrew(message.PlayerId));
            }

            if (isCurrentUser(message)) {
                return;
            }

            showToast("A player left your crew.");
        });

        newConnection.on('CrewMemberKicked', (message: { PlayerId: string }) => {
            if (activeCrew.Id !== "") {
                dispatch(removeMemberToActiveCrew(message.PlayerId));
            }

            if (!isCurrentUser(message) || isCaptain(activeCrew.Id, userId ?? '')) {
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

        setConnection(newConnection);
        return newConnection;
    };


    return {startConnection, connection, stopConnection};
};

export default useSignalR;