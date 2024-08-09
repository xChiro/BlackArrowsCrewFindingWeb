import {useEffect, useState, useCallback} from 'react';
import * as signalR from '@microsoft/signalr';
import {useAuth} from "../useAuth.tsx";
import SignalRService from "../../services/SignalRService.ts";
import useToast from "../../components/utilities/notifications/useToast.tsx";

interface SignalRConnectionInfo {
    Url: string;
    AccessToken: string;
}

const useSignalR = (): { startConnection: () => void; messages: string[] } => {
    const [messages, setMessages] = useState<string[]>([]);
    const [start, setStart] = useState(false);
    const {getAccessToken, getUserId} = useAuth();
    const showToast = useToast();
    let newConnection: signalR.HubConnection;

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

            const newConnection = new signalR.HubConnectionBuilder()
                .withUrl(data.Url, {accessTokenFactory: () => data.AccessToken})
                .configureLogging(signalR.LogLevel.Information)
                .build();

            newConnection.on('NotifyPlayerJoined', (message: {PlayerId: string}) => {
                if(userId === message.PlayerId) {
                    return;
                }

                showToast("A player joined to your crew.");
            });

            newConnection.on('PlayerLeftCrew', (message:  {PlayerId: string}) => {
                if(userId === message.PlayerId) {
                    return;
                }

                showToast("A player left your crew.");
            });

            newConnection.on('CrewMemberKicked', (message: {PlayerId: string}) => {
                if(userId === message.PlayerId) {
                    return;
                }

                setMessages(prevMessages => [...prevMessages, "A player left your crew."]);
                showToast("A player left your crew.");
            });

            newConnection.on('CrewDisbanded', (message: string) => {
                setMessages(prevMessages => [...prevMessages, message]);
                showToast("Your crew has been disbanded by the captain.");
            });

            newConnection.on('KickedFromCrew', (message: string) => {
                setMessages(prevMessages => [...prevMessages, message]);
                showToast("You have been kicked from the crew.");

            });

            await newConnection.start();
            console.log('SignalR Connected.');
        };

        createSignalRConnection();

        return () => {
            if (newConnection) {
                newConnection.stop().then(() => console.log('SignalR Connection stopped.'));
            }
        };
    }, [start]);

    return {messages, startConnection};
};

export default useSignalR;