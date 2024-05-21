import styled from 'styled-components';
import {NavUserComponent} from "./NavUserComponent.tsx";
import {NavLogoComponent} from "./NavLogoComponent.tsx";
import {MainMenu} from "./main/MainMenuComponent.tsx";
import {colors} from "../../themes/Colors.ts";
import {MenuItem} from "./main/MenuItem.tsx";

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

    @media (max-width: 600px){
        flex-direction: row;
        height: 3rem;
    }
`;

const Navbar = () => {
    const menuItems: MenuItem[] = [
        {
            name: 'Item 1',
            onClick: () => console.log('Item 1 clicked'),
        },
        {
            name: 'Item 2',
            onClick: () => console.log('Item 2 clicked'),
        },
    ];

    return (
        <StyledNavbar>
            <MainMenu items={menuItems} />
            <NavLogoComponent />
            <NavUserComponent />
        </StyledNavbar>
    );
};

export default Navbar;