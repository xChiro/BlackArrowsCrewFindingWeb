import styled from "styled-components";
import {StyledSubMenu} from "../IconMenu.tsx";

export const BellIcon = styled.div`
    color: white;
    align-content: center;

    &:hover ${StyledSubMenu} {
        display: block;
    }
`;