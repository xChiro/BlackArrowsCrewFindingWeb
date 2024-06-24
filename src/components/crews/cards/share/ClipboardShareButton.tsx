import useToast from "../../../utilities/notifications/useToast.tsx";
import styled from "styled-components";
import {colors} from "../../../../themes/Colors.ts";
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledShareButton = styled.button`
    background-color: ${colors.lightBlueColor};
    color: ${colors.fontColor};
    min-height: 2rem;
    border: none;
    cursor: pointer;    
    min-height: 1.8rem;
    transition: background-color 0.2s ease;
    width: 100%;
    
    svg {
        margin-right: 0.5em;
    }

    &:hover {
        background-color: ${colors.mediumBlueColor};
    }

    &:active {
        background-color: ${colors.darkBlueColor};
    }
`;

export const ClipboardShareButton = ({url, text}: { url: string, text: string }) => {
    const showToast = useToast();

    const onShareClick = () => {
        navigator.clipboard.writeText(url).then(() => {
            showToast('Crew Link Copied to clipboard');
        });
    };

    return (
        <>
            <StyledShareButton onClick={onShareClick}>
                <FontAwesomeIcon icon={faShare} />
                {text}
            </StyledShareButton>
        </>
    );
}