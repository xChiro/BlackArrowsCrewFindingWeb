import {CrewCreation} from "../../services/models/crews/CrewCreation.ts";
import {useAuthToken} from "../useAuthToken.tsx";
import {useState} from "react";
import CrewService from "../../services/CrewService.ts";
import {usePlayer} from "../usePlayerProfile.tsx";
import {useNavigate} from "react-router-dom";

export const useCreateCrew = (initialCrew: CrewCreation): {
    crew: CrewCreation,
    setCrew: (crew: CrewCreation) => void,
    createCrew: (crew: CrewCreation) => Promise<void>
} => {
    const authToken = useAuthToken();
    const {joinCrew} = usePlayer();
    const [crew, setCrew] = useState<CrewCreation>(initialCrew);
    const navigate = useNavigate();

    const createCrew = async (crew: CrewCreation) => {
        try {
            const token = await authToken();
            const crewService = new CrewService(token);
            const crewId = await crewService.createCrew(crew);
            joinCrew(crewId);
            navigate('/');
        } catch (e) {
            console.error(e);
        }
    };

    return {crew, setCrew, createCrew};
};