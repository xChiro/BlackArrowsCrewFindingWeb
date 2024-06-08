import CrewViewComponent from "./cards/CrewViewComponent.tsx";
import useGetCrew from "../../hooks/crews/useGetCrew.tsx";
import {useParams} from "react-router-dom";

const CrewViewWrapper = () => {
    const {crewId} = useParams();
    const {crew} = useGetCrew(crewId ?? "");

    return (

        <CrewViewComponent crewId={crewId ?? ""}
                           crewName={crew?.Name ?? ""}
                           captainId={crew?.CaptainId ?? ""}
                           captainName={crew?.CaptainName ?? ""}
                           location={`${crew?.ReunionPoint.PlanetarySystem} - ${crew?.ReunionPoint.System} - ${crew?.ReunionPoint.PlanetMoon} - ${crew?.ReunionPoint.Place}`}
                           maxAllowedMembers={crew?.MaxPlayers ?? 0}
                           totalCurrentMembers={crew?.Members.length ?? 0}
                           activity={crew?.Activity ?? ""}
                           description={crew?.Description ?? ""}
                           Members={crew?.Members.map(member => member.CitizenName) ?? []}
        />
    );
};

export default CrewViewWrapper;