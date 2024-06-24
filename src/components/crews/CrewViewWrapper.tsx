import CrewViewComponent from "./cards/CrewViewComponent.tsx";
import useGetCrew from "../../hooks/crews/useGetCrew.tsx";
import {useParams} from "react-router-dom";
import useCreateChannelInviteLink from "../../hooks/crews/useCreateChannelInviteLink.tsx";

const CrewViewWrapper = () => {
    const {crewId} = useParams();
    const {crew} = useGetCrew(crewId ?? "");
    const {inviteLink} = useCreateChannelInviteLink();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minWidth: '25rem',
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
                                   Languages={crew?.Languages ?? []}
                                   CreatedAt={crew?.CreatedAt ?? new Date()}
                                   discordVoiceChannel={inviteLink ?? null}
                />
            </div>
        </div>
    );
};

export default CrewViewWrapper;