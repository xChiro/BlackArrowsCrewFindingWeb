import styled from "styled-components";
import {StyledSubMenu} from "../StyledSubMenu.tsx";

export const BellIcon = styled.div`
    color: white;
    align-content: center;

    &:hover ${StyledSubMenu} {
        display: block;
    }
`;