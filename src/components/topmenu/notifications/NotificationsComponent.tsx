import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HoverContainer, StyledSubMenu } from '../StyledSubMenu.tsx';
import useNotifications from '../../../hooks/Notifications/useNotifications.tsx';
import { Notification } from './Notification.tsx';
import styled from 'styled-components';

const BellIconContainer = styled.div`
    position: relative;
    display: inline-block;
`;

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
    const { notifications, removeNotification } = useNotifications();

    return (
        <HoverContainer>
            <BellIconContainer>
                <FontAwesomeIcon icon={faBell} size="lg" />
                {notifications.length > 0 && <NotificationDot />}
                <StyledSubMenu>
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <Notification
                                key={index}
                                notification={notification}
                                removeNotification={removeNotification}
                            />
                        ))
                    ) : (
                        <NoNotificationMessage>No notifications</NoNotificationMessage>
                    )}
                </StyledSubMenu>
            </BellIconContainer>
        </HoverContainer>
    );
};

export default Notifications;
