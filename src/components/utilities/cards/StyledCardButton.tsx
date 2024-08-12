import styled from "styled-components";
import { colors } from "../../../themes/Colors.ts";

export const StyledCardButton = styled.button<{ $buttonBackgroundColor: string; $canClick: boolean; $fontSize?: string }>`
    flex: 0 0 10%;
    background-color: ${({ $buttonBackgroundColor }) => $buttonBackgroundColor};
    color: ${colors.fontColor};
    border: none;
    border-radius: 0 0 1rem 1rem;
    cursor: ${({ $canClick }) => $canClick ? 'pointer' : 'not-allowed'};
    width: 100%;
    min-height: 2.3rem;
    font-size: ${({ $fontSize }) => $fontSize || '1.5rem'};
    margin-top: auto;
    
    @media (max-width: 775px) {
        font-size: 1.5rem;
    }
`;