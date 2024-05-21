import {useState} from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MenuItem} from "./MenuItem.tsx";
import {ContextMenuComponent} from "./ContextMenuComponent.tsx";
import {StyledNavBarIcon} from "../StyledNavBarIcon.tsx";

interface MenuProps {
    items: MenuItem[];
}

export const MainMenu = (props: MenuProps) => {
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
            {isOpen &&
                <ContextMenuComponent items={props.items} handleMouseLeave={handleMouseLeave}/>
            }
        </div>
    );
};
