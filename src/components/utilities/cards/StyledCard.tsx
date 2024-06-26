import styled from "styled-components";
import {colors} from "../../../themes/Colors.ts";

export interface StyledCardProps {
    $maxWidth?: string;
    $minWidth?: string;
    $minHeight?: string;
    $maxHeight?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 1rem;
    width: 100%;
    min-width: ${props => props.$minWidth || '25rem'};
    max-width: ${props => props.$maxWidth || '25rem'};
    min-height: ${props => props.$minHeight || '35rem'};
    max-height: ${props => props.$maxHeight || '35rem'};
    flex-shrink: 0;

    @media (max-height: 750px) {
        min-width: 20rem;
    }

    @media (max-width: 350px) {
        min-width: 15rem;
    }
`;