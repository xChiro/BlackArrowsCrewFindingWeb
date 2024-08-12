import styled from "styled-components";
import {colors} from "../../themes/Colors.ts";

export const StyledSubMenu = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${colors.secondary};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: max-content;
    text-align: left;
    cursor: pointer;
    padding: .3rem;
    border-radius: .7rem;

    & a {
        color: white;
        padding: .5rem;
        text-decoration: none;
        display: block;
    }

    & a:hover {
        background-color: ${colors.primary};
        border-radius: .4rem;
    }
`;

export const HoverContainer = styled.div`
    position: relative;

    &:hover ${StyledSubMenu} {
        display: block;
    }
`;