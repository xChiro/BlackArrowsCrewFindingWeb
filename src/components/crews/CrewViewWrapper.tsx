import CrewViewComponent from "./cards/CrewViewComponent.tsx";
import useGetCrew from "../../hooks/crews/useGetCrew.tsx";
import {useParams} from "react-router-dom";

const CrewViewWrapper = () => {
    const {crewId} = useParams();
    const {crew} = useGetCrew(crewId ?? "");

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: '0'}}>

            <div style={{
                backgroundColor: '#d9c56d',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1000,
                padding: '.5rem',
                color: 'black',
                marginBottom: '1rem',
                fontWeight: 'bold',
            }}>
                Don't forget to add your captain/crew member to your in-game friend list!
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
                <CrewViewComponent crewId={crewId ?? ""}
                                   crewName={crew?.Name ?? ""}
                                   captainId={crew?.CaptainId ?? ""}
                                   captainName={crew?.CaptainName ?? ""}
                                   location={`${crew?.ReunionPoint.System} - ${crew?.ReunionPoint.PlanetarySystem} - ${crew?.ReunionPoint.PlanetMoon} - ${crew?.ReunionPoint.Place}`}
                                   maxAllowedMembers={crew?.MaxPlayers ?? 0}
                                   totalCurrentMembers={crew?.Members.length ?? 0}
                                   activity={crew?.Activity ?? ""}
                                   description={crew?.Description ?? ""}
                                   Members={crew?.Members ?? []}
                />
            </div>
        </div>
    );
};

export default CrewViewWrapper;