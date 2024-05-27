import { configureStore } from '@reduxjs/toolkit';
import playerProfileSlice from "./PlayerProfileSlice.ts";

export const store = configureStore({
    reducer: {
        playerProfile: playerProfileSlice
    }
});