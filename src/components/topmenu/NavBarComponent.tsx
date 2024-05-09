import React from 'react';
import styled from 'styled-components';
import {NavUserComponent} from "./NavUserComponent.tsx";
import {NavLogoComponent} from "./NavLogoComponent.tsx";
import {MainMenu} from "./main/MainMenuComponent.tsx";
import {colors} from "../themes/Colors.tsx";

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

    @media (max-width: 600px){
        flex-direction: row;
        height: 3rem;
    }
`;

const Navbar: React.FC = () => {
    const menuItems = [
        {
            name: 'Item 1',
            subItems: ['SubItem 1', 'SubItem 2'],
        },
        {
            name: 'Item 2',
            subItems: ['SubItem 3', 'SubItem 4'],
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