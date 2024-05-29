import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    color: #f0f0f0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    display: inline-block;

    &:hover {
        color: #f0f0f0;
    }
`;

export const NavLogoComponent = () => {
    return (
        <StyledLink to="/">Crew Finding</StyledLink>
    );
};