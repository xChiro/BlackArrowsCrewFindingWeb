import styled from "styled-components";
import {colors} from "../../../themes/Colors.ts";

interface StyledCardProps {
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 1rem;
    width: 100%;
    max-width: ${props => props.maxWidth || '25rem'};
    min-height: ${props => props.minHeight || '30rem'};
`;