import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const StyledNavBarIcon = styled(FontAwesomeIcon)`
    font-size: 2.3em;

    @media (max-width: 600px) {
        font-size: 1.8em;
    }

    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 2.3em;
    }

    @media (min-width: 1025px) {
        font-size: 2.3em;
    }
`;