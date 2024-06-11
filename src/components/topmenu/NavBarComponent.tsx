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
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: row;
        height: 3rem;
    }
`;

const LeftAlignedDiv = styled.div`
    width: 112px;
    text-align: left;
`;

const CenterAlignedDiv = styled.div`
    width: 50%;
    text-align: center;
`;

const RightAlignedDiv = styled.div`
    width: 112px;
    text-align: right;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <LeftAlignedDiv>
                <CrewMenuButton/>
            </LeftAlignedDiv>
            <CenterAlignedDiv>
                <NavLogoComponent/>
            </CenterAlignedDiv>
            <RightAlignedDiv>
                <NavUserComponent/>
            </RightAlignedDiv>
        </StyledNavbar>
    );
};

export default Navbar;