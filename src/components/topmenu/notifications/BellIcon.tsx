import styled from "styled-components";
import {StyledSubMenu} from "../StyledSubMenu.tsx";

export const BellIcon = styled.div`
    color: white;

    &:hover ${StyledSubMenu} {
        display: block;
    }
`;