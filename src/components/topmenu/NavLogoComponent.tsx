import {Link} from "react-router-dom";
import styled from 'styled-components';
import logo from '../../assets/Asset 3.png';

const StyledLink = styled(Link)`
    font-size: 1.5em;
    color: #f0f0f0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    align-content: center;

    &:hover {
        color: #f0f0f0;
    }

    @media (max-width: 600px) {
        font-size: 1em;
    }

    img {
        cursor: pointer;
    }
`;

export const NavLogoComponent = () => {
    return (
        <StyledLink to="/">
            <img src={logo} alt="Logo" width="20px" />
        </StyledLink>
    );
};