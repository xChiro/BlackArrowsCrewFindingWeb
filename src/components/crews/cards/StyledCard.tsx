import styled from "styled-components";
import {colors} from "../../themes/Colors.tsx";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 1rem;
    width: 100%;
    max-width: 15rem;
    min-height: 20rem;
    max-height: 35rem;
`;