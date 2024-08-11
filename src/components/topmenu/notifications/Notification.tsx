import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

type Notification = {
    id: string;
    text: string;
    url: string;
};

export type NotificationProps = {
    notification: Notification;
    removeNotification: (id: string) => void
};

export const Notification: React.FC<NotificationProps> = ({notification, removeNotification}) => (
    <>
        <Link to={notification.url} onClick={() => removeNotification(notification.id)}>
            {notification.text}
        </Link>
        <FontAwesomeIcon icon={faTimes} onClick={() => removeNotification(notification.id)}/>
    </>
);