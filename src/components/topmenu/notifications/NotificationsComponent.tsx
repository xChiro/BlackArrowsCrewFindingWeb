import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {StyledSubMenu} from '../StyledSubMenu.tsx';
import useNotifications from "../../../hooks/Notifications/useNotifications.tsx";
import {Notification} from "./Notification.tsx";
import {BellIcon} from "./BellIcon.tsx";
import styled from "styled-components";

const NotificationDot = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
`;

const NoNotificationMessage = styled.div`
    padding: 10px;
    text-align: center;
`;

const Notifications: React.FC = () => {
    const {notifications, removeNotification} = useNotifications();

    return (
        <BellIcon>
            <div style={{position: 'relative'}}>
                <FontAwesomeIcon icon={faBell}/>
                {notifications.length > 0 && <NotificationDot/>}
            </div>
            <StyledSubMenu>
                {notifications.length > 0 ?
                    notifications.map((notification) =>
                        <Notification key={notification.id}
                                      notification={notification}
                                      removeNotification={removeNotification}/>
                    )
                    :
                    <NoNotificationMessage>No notifications</NoNotificationMessage>
                }
            </StyledSubMenu>
        </BellIcon>
    );
};

export default Notifications;