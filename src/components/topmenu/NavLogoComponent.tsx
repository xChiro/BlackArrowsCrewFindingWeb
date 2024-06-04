import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-size: 1.5em;
    color: #f0f0f0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    display: inline-block;

    &:hover {
        color: #f0f0f0;
    }
    
    @media (max-width: 600px) {
        font-size: 1em;
    }
`;

export const NavLogoComponent = () => {
    return (
        <StyledLink to="/">Crew Finding</StyledLink>
    );
};