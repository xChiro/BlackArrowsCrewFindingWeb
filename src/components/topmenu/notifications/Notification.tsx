import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../themes/Colors.ts";

type Notification = {
    timestamp: number;
    text: string;
    url: string;
};

export type NotificationProps = {
    notification: Notification;
    removeNotification: (timestamp: number) => void;
};

const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${colors.secondary};
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin-top: 8px;
    
    &:hover {
        background-color: ${colors.primary};
        border-radius: 0.4rem;
    }
`;

const TimeAgoText = styled.span`
    font-size: 0.6rem;
    color: ${colors.fontColor};
`;

const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const NotificationText = styled(Link)`
    flex: 1;
    font-size: 1rem;
    text-align: left;
    color: ${colors.fontColor};
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

const CloseIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    padding: 0.2rem;
    
    &:hover {
        background-color: ${colors.redAlertColor};
        border-radius: 0.4rem;
    }
`;

export const Notification: React.FC<NotificationProps> = ({ notification, removeNotification }) => {

    const receivedAt = (timestamp: number) => {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `At ${hours}:${minutes}`;
    }

    return (
        <NotificationContainer>
            <TimeAgoText>{receivedAt(notification.timestamp)}</TimeAgoText>
            <ContentRow>
                <NotificationText to={notification.url} onClick={() => removeNotification(notification.timestamp)}>
                    {notification.text}
                </NotificationText>
                <CloseIcon icon={faTimes} onClick={() => removeNotification(notification.timestamp)} />
            </ContentRow>
        </NotificationContainer>
    );
};