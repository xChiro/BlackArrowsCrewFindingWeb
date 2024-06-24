import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

const StyledJoinChannelButton = styled.a`
    display: flex;
    justify-content: center;
    background-color: #5865F2;
    color: white;
    border: none;
    min-height: 1.8rem;
    font-size: .8rem;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    color: white;
    text-decoration: none;

    svg {
        margin-right: 0.5em;
    }

    &:hover {
        background-color: rgba(88, 101, 242, 0.9);
    }
`;

export const JoinVoiceChannelButton = ({url}: { url: string }) => {
    return (
        <>
            <StyledJoinChannelButton href={url} target="_blank">
                <FontAwesomeIcon icon={faDiscord}/>
                Voice Channel
            </StyledJoinChannelButton>
        </>
    );
}