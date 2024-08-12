import {useDispatch, useSelector} from "react-redux";
import {
    addNotification as addNotificationStore,
    removeNotification as removeNotificationStore
} from "../../stores/NotificationSlice.ts";

export type Notification = {
    timestamp: number;
    text: string;
    url: string;
};

const useNotifications = () => {
    const notifications: Notification[] = useSelector((state: {
        notifications: Notification[]
    }) => state.notifications);
    const dispatch = useDispatch();

    const addNotification = (text: string, url: string) => {
        dispatch(addNotificationStore(
            {
                text,
                url,
                timestamp: new Date().getTime()
            }
        ));
    };

    const removeNotification = (id: number) => {
        dispatch(removeNotificationStore(id));
    };

    return {notifications, addNotification, removeNotification} as const;
};

export default useNotifications;