import styled from "styled-components";
import {colors} from "../../../themes/Colors.ts";

export const StyledCardButton = styled.button<{ backgroundColor: string; canJoin: boolean; }>`
    flex: 0 0 10%;
    background-color: ${props => props.backgroundColor};
    color: ${colors.fontColor};
    border: none;
    border-radius: 0 0 1rem 1rem;
    cursor: ${props => props.canJoin ? "not-allowed" : "pointer"};
    width: 100%;
    font-size: 1.9rem;
`;