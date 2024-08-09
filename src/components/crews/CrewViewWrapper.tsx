import CrewViewComponent from "./cards/CrewViewComponent.tsx";
import useGetCrew from "../../hooks/crews/useGetCrew.tsx";
import {useParams} from "react-router-dom";
import useCreateChannelInviteLink from "../../hooks/crews/useCreateChannelInviteLink.tsx";
import {useSelector} from "react-redux";
import {CrewMember} from "../../services/models/crews/CrewMember.ts";

const CrewViewWrapper = () => {
    const {crewId} = useParams();
    const {crew} = useGetCrew(crewId ?? "");
    const activeCrew = useSelector((state: { activeCrew: { Members: CrewMember[] } }) => state.activeCrew);
    const {inviteLink} = useCreateChannelInviteLink();

    return (
        <CrewViewComponent crewId={crewId ?? ""}
                           crewName={crew?.Name ?? ""}
                           captainId={crew?.CaptainId ?? ""}
                           captainName={crew?.CaptainName ?? ""}
                           location={`${crew?.ReunionPoint.System} - ${crew?.ReunionPoint.PlanetarySystem} - ${crew?.ReunionPoint.PlanetMoon} - ${crew?.ReunionPoint.Place}`}
                           maxAllowedMembers={crew?.MaxPlayers ?? 0}
                           totalCurrentMembers={activeCrew.Members.length ?? 0}
                           activity={crew?.Activity ?? ""}
                           description={crew?.Description ?? ""}
                           Members={activeCrew.Members ?? []}
                           Languages={crew?.Languages ?? []}
                           CreatedAt={crew?.CreatedAt ?? new Date()}
                           discordVoiceChannel={inviteLink ?? null}
        />
    );
};

export default CrewViewWrapper;