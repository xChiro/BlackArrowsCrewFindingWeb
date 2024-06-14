import {CrewCreation} from "../../services/models/crews/CrewCreation.ts";
import {useAuth} from "../useAuth.tsx";
import {useState} from "react";
import CrewService from "../../services/CrewService.ts";
import {usePlayer} from "../usePlayerProfile.tsx";
import {useNavigate} from "react-router-dom";

export const useCreateCrew = (initialCrew: CrewCreation): {
    crew: CrewCreation,
    setCrew: (crew: CrewCreation) => void,
    createCrew: (crew: CrewCreation) => Promise<void>
} => {
    const {getAccessToken} = useAuth();
    const {joinCrew} = usePlayer();
    const [crew, setCrew] = useState<CrewCreation>(initialCrew);
    const navigate = useNavigate();

    const createCrew = async (crew: CrewCreation) => {
        try {
            const token = getAccessToken();
            const crewService = new CrewService(token);
            const crewId = await crewService.createCrew(crew);
            joinCrew(crewId);
            navigate('/crews/' + crewId);
        } catch (e) {
            console.error(e);
        }
    };

    return {crew, setCrew, createCrew};
};