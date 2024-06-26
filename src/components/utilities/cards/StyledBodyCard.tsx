import styled from "styled-components";
import {StyledCardProps} from "./StyledCard.tsx";

export const StyledBodyCard = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 1rem;
    margin-bottom: 1rem;
    min-width: 25rem;

    @media (max-height: 750px) {
        min-width: 20rem;
    }

    @media (max-width: 350px) {
        min-width: 15rem;
    }
`;