import styled from "styled-components";
import {colors} from "../../../themes/Colors.ts";
import {CrewMember} from "../../../services/models/crews/CrewMember.ts";
import HandleNameLink from "./HandleNameLink.tsx";

const StyledMemberList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    overflow-y: auto;
    max-height: 200px;
`;

const StyledMemberItem = styled.li`
    background: none;
    border: none;
`;

const StyledKickMemberButton = styled.button`
    background-color: ${colors.redAlertColor};
    border: none;
    color: white;
    cursor: pointer;
    margin-left: 1rem;
    border-radius: .2rem;
    font-size: .7rem;
`;

interface MemberListProps {
    members: CrewMember[],
    isCaptain: (crewId: string, captainId: string) => boolean,
    crewId: string,
    captainId: string,
    onKickMember: (memberId: string) => void,
}

const MemberList = ({members, isCaptain, crewId, captainId, onKickMember}: MemberListProps) => {
    return (
        <StyledMemberList>
            {members.map((member) => (
                <StyledMemberItem key={member.Id}>
                    <HandleNameLink handleName={member.CitizenName.Value}/>
                    {isCaptain(crewId, captainId) && (
                        <StyledKickMemberButton
                            onClick={() => onKickMember(member.Id)}>Remove
                        </StyledKickMemberButton>
                    )}
                </StyledMemberItem>
            ))}
        </StyledMemberList>
    );
}

export default MemberList;