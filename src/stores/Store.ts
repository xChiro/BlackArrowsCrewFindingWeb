import { configureStore } from '@reduxjs/toolkit';
import playerProfileSlice from "./PlayerProfileSlice.ts";
import activeCrewSlice from "./ActiveCrewSlice.ts";

export const store = configureStore({
    reducer: {
        playerProfile: playerProfileSlice,
        activeCrew: activeCrewSlice
    }
});