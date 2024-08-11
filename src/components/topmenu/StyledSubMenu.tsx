import styled from "styled-components";
import {colors} from "../../themes/Colors.ts";

export const NavUserContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const StyledSubMenu = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: ${colors.secondary};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: max-content;
    text-align: left;
    cursor: pointer;
    border-radius: .7rem;

    & a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    & a:hover {
        background-color: ${colors.primary};
    }

    ${NavUserContainer}:hover & {
        display: block;
    }
`;