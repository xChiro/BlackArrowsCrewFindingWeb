import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayerProfile {
    Id: string;
    CitizenName: string;
    ActiveCrewName: string;
    ActiveCrewId: string;
}

const initialState: PlayerProfile = {
    Id: '',
    CitizenName: '',
    ActiveCrewName: '',
    ActiveCrewId: ''
};

const playerProfileSlice = createSlice({
    name: 'playerProfile',
    initialState,
    reducers: {
        createProfile: (_, action: PayloadAction<PlayerProfile>) => {
            return action.payload;
        }
    }
});

export const { createProfile } = playerProfileSlice.actions;

export default playerProfileSlice.reducer;