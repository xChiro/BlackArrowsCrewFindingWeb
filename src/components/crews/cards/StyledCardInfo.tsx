import styled from "styled-components";

export const StyledCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0rem;

    h1, h5 {
        margin-bottom: .2rem;
        align-self: center;
    }
    
    h2 {
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }

    span {
        margin-bottom: 1rem;
        align-self: flex-start;
    }
`;