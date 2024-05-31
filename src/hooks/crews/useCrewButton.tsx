import { useMemo } from 'react';
import CrewCardDisbandButton from "../../components/crews/cards/CrewCardDisbandButton";
import CrewCardJoinButton from "../../components/crews/cards/CrewCardJoinButton";
import CrewCardLeaveButton from "../../components/crews/cards/CrewCardLeaveButton";
import {usePlayer} from "../usePlayerProfile";

const useCrewButton = (crewId: string, crewCaptainId: string, isCrewFull: boolean) => {
    const {profile, isCaptain} = usePlayer();

    return useMemo(() => {
        if (isCaptain(crewId, crewCaptainId)) {
            return <CrewCardDisbandButton isFull={isCrewFull} crewId={crewId} captainCrewId={crewCaptainId}/>;
        }

        if (profile.ActiveCrewId !== crewId) {
            return <CrewCardJoinButton isFull={isCrewFull} crewId={crewId}/>
        }

        return <CrewCardLeaveButton isFull={isCrewFull} crewId={crewId}/>;
    }, [crewId, crewCaptainId, isCrewFull, profile, isCaptain]);
}

export default useCrewButton;