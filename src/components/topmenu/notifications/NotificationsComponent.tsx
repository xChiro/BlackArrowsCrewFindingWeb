import React, {useState} from 'react';
import IconMenu from "../IconMenu.tsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import useNotifications from "../../../hooks/Notifications/useNotifications.tsx";
import Notification from "./Notification.tsx";


const NotificationDot = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    transform: translate(50%, -50%);
`;

const NoNotificationMessage = styled.div`
    padding: 10px;
    text-align: center;
`;

const Notifications: React.FC = () => {
    const {notifications, removeNotification} = useNotifications();
    const [isOpen, setIsOpen] = useState(false);

    const items = notifications.length > 0 ?
        notifications.map((notification, index) => (
            <Notification
                key={index}
                notification={notification}
                removeNotification={removeNotification}
                onClick={() => setIsOpen(false)}
            />
        )) : ([<NoNotificationMessage key={0} onClick={() => setIsOpen(false)}>No notifications</NoNotificationMessage>]);

    const bellIcon = () => {
        return (
            <>
                <FontAwesomeIcon icon={faBell} size="lg"/>
                {notifications.length > 0 && <NotificationDot/>}
            </>
        );
    }

    return <IconMenu icon={bellIcon()} items={items} closeMenu={isOpen}/>;
};

export default Notifications;
