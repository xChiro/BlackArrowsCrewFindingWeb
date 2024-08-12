import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface RefreshIconProps extends FontAwesomeIconProps {
    disabled: boolean;
}

const RefreshIcon = styled(FontAwesomeIcon)<RefreshIconProps>`
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export default RefreshIcon;