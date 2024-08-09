import {createSlice} from "@reduxjs/toolkit";
import {CrewMember} from "../services/models/crews/CrewMember.ts";

export interface ActiveCrew {
    Id: string;
    Members: CrewMember[];
}

const initialState: ActiveCrew = {
    Id: '',
    Members: []
};

const activeCrewSlice = createSlice({
    name: 'activeCrew',
    initialState,
    reducers: {
        createActiveCrew: (_, action) => {
            return action.payload;
        },
        addMemberToActiveCrew: (state, action) => {
            state.Members.push(action.payload);
        },
        removeMemberToActiveCrew: (state, action) => {
            state.Members = state.Members.filter(member => member.Id !== action.payload);
        }
    }
});
export const {createActiveCrew, addMemberToActiveCrew, removeMemberToActiveCrew} = activeCrewSlice.actions;

export default activeCrewSlice.reducer;