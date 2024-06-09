import { useMemo } from 'react';
import CrewCardDisbandButton from "../../components/crews/cards/CrewCardDisbandButton";
import CrewJoinCardButton from "../../components/crews/cards/CrewJoinCardButton.tsx";
import CrewCardLeaveButton from "../../components/crews/cards/CrewCardLeaveButton";
import {usePlayer} from "../usePlayerProfile";

const useCrewButton = (crewId: string, crewCaptainId: string, isCrewFull: boolean) => {
    const {profile, isCaptain} = usePlayer();

    return useMemo(() => {
        if (isCaptain(crewId, crewCaptainId)) {
            return <CrewCardDisbandButton isFull={isCrewFull} crewId={crewId} captainCrewId={crewCaptainId}/>;
        }

        if (profile.ActiveCrewId !== crewId) {
            return <CrewJoinCardButton isFull={isCrewFull} crewId={crewId}/>
        }

        return <CrewCardLeaveButton isFull={isCrewFull} crewId={crewId}/>;
    }, [crewId, crewCaptainId, isCrewFull, profile, isCaptain]);
}

export default useCrewButton;