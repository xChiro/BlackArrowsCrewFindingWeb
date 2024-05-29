import styled from 'styled-components';
import {NavUserComponent} from "./NavUserComponent.tsx";
import {NavLogoComponent} from "./NavLogoComponent.tsx";
import {CrewMenuButton} from "./CrewMenuButton.tsx";
import {colors} from "../../themes/Colors.ts";

const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    margin: 0;
    padding: 0 10%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: row;
        height: 3rem;
    }
`;

const StyledDiv = styled.div`
    width: 33%;
    text-align: center;
`;

const Navbar = () => {
    const components = [<CrewMenuButton/>, <NavLogoComponent/>, <NavUserComponent/>];

    return (
        <StyledNavbar>
            {components.map((Component, index) =>
                <StyledDiv key={index}>{Component}</StyledDiv>)}
        </StyledNavbar>
    );
};

export default Navbar;