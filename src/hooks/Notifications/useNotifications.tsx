import {useDispatch, useSelector} from "react-redux";
import {addNotification as addNotificationStore, removeNotification as removeNotificationStore} from "../../stores/NotificationSlice.ts";

export type Notification = {
    id: string;
    text: string;
    url: string;
};

const useNotifications = () => {
    const notifications: Notification[] = useSelector((state: { notifications: Notification[] }) => state.notifications);
    const dispatch = useDispatch();

    const addNotification = (notification: Notification) => {
        dispatch(addNotificationStore(notification));
    };

    const removeNotification = (id: string) => {
        dispatch(removeNotificationStore(id));
    };

    return {notifications, addNotification, removeNotification} as const;
};

export default useNotifications;