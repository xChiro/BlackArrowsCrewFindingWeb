import {useEffect, useState} from "react";
import CrewService from "../../services/CrewService.ts";
import {Crew} from "../../services/models/crews/Crew.ts";
import {useAuth} from "../useAuth.tsx";

const useGetCrew = (id: string) => {
    const [crew, setCrew] = useState<Crew | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {getAccessToken} = useAuth();

    useEffect(() => {
        setLoading(true);
        const token = getAccessToken();
        new CrewService(token).getCrew(id).then(
            crew => {
                setCrew(crew);
            }
        ).catch(
            error => {
                setError(error);
            }).finally(
            () => {
                setLoading(false);
            });
    }, [id]);

    return {crew, error, isLoading: loading};
};

export default useGetCrew;