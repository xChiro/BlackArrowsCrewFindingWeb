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
        },
        addCrew: (state, action: PayloadAction<string>) => {
            state.ActiveCrewId = action.payload;
        },
        removeCrew: (state) => {
            state.ActiveCrewId = '';
        },
        updateCitizenName: (state, action: PayloadAction<string>) => {
            state.CitizenName = action.payload;
        }
    }
});

export const { createProfile, addCrew, removeCrew, updateCitizenName } = playerProfileSlice.actions;

export default playerProfileSlice.reducer;