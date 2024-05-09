import React, {useState} from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MainMenuItem} from "./MainMenuItem.tsx";
import {MainSubMenuComponent} from "./MainSubMenuComponent.tsx";
import {StyledNavBarIcon} from "../StyledNavBarIcon.tsx";

interface MenuProps {
    items: MainMenuItem[];
}

export const MainMenu: React.FC<MenuProps> = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIconClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <StyledNavBarIcon icon={faBars} onClick={handleIconClick}/>
            {isOpen && (
                items.map((item, index) => (
                    <MainSubMenuComponent key={index} item={item} handleMouseLeave={handleMouseLeave}/>
                ))
            )}
        </div>
    );
};
