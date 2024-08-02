import {useEffect, useState} from 'react';
import * as signalR from '@microsoft/signalr';
import {useAuth} from "./useAuth.tsx";
import SignalRService from "../services/SignalRService.ts";

interface SignalRConnectionInfo {
    url: string;
    accessToken: string;
}

interface UseSignalRResult {
    connection: signalR.HubConnection | null;
    messages: string[];
}

const useSignalR = (negotiationUrl: string): UseSignalRResult => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
    const {getAccessToken} = useAuth();

    useEffect(() => {
        const createSignalRConnection = async () => {
            const token = getAccessToken();
            const signalRService = new SignalRService(token ?? '');
            const response = await signalRService.negotiate();
            const data: SignalRConnectionInfo = {
                url: response.url,
                accessToken: response.accessToken
            };

            const newConnection = new signalR.HubConnectionBuilder()
                .withUrl(data.url, {accessTokenFactory: () => data.accessToken})
                .configureLogging(signalR.LogLevel.Information)
                .build();

            newConnection.on('newMessage', (message: string) => {
                setMessages(prevMessages => [...prevMessages, message]);
            });

            await newConnection.start();
            console.log('SignalR Connected.');

            setConnection(newConnection);
        };

        createSignalRConnection();

        return () => {
            if (connection) {
                connection.stop();
            }
        };
    }, [negotiationUrl]);

    return {connection, messages};
};

export default useSignalR;
