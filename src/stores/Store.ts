import { configureStore } from '@reduxjs/toolkit';
import playerProfileSlice from "./PlayerProfileSlice.ts";
import activeCrewSlice from "./ActiveCrewSlice.ts";
import notificationSlice from "./NotificationSlice.ts";

export const store = configureStore({
    reducer: {
        playerProfile: playerProfileSlice,
        activeCrew: activeCrewSlice,
        notifications: notificationSlice
    }
});