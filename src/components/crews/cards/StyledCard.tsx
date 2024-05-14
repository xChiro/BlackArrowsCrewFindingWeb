import styled from "styled-components";
import {colors} from "../../../themes/Colors.ts";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 1rem;
    width: 100%;
    max-width: 20rem;
    min-height: 28rem;
    max-height: 45rem;
`;