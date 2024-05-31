import styled from "styled-components";
import { colors } from "../../../themes/Colors.ts";

export const StyledCardButton = styled.button<{ $buttonBackgroundColor: string; $canClick: boolean; }>`
    flex: 0 0 10%;
    background-color: ${({ $buttonBackgroundColor }) => $buttonBackgroundColor};
    color: ${colors.fontColor};
    border: none;
    border-radius: 0 0 1rem 1rem;
    cursor: ${({ $canClick }) => $canClick ? 'pointer' : 'not-allowed'};
    width: 100%;
    min-height: 3rem;
    font-size: 1.9rem;
    margin-top: auto;
`;