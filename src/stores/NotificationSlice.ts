import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Notification = {
    timestamp: number;
    text: string;
    url: string
};

const initialState: Notification[] = [];

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Notification>) => {
            state.push(action.payload);
        },
        removeNotification: (state, action: PayloadAction<number>) => {
            return state.filter(
                (notification) => notification.timestamp !== action.payload
            );
        },
    },
});

export const {addNotification, removeNotification} = notificationSlice.actions;

export default notificationSlice.reducer;