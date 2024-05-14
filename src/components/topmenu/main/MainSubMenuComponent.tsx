import React from "react";
import styled from "styled-components";
import {MainMenuItem} from "./MainMenuItem.tsx";
import {colors} from "../../themes/Colors.ts";

const StyledSubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${colors.primary};
    padding: 10px;
    z-index: 1;
`;

interface MainSubMenuProps {
    item: MainMenuItem;
    handleMouseLeave: () => void;
}

export const MainSubMenuComponent: React.FC<MainSubMenuProps> = ({item, handleMouseLeave}) => {
    return (
        <StyledSubMenu onMouseLeave={handleMouseLeave}>
            {item.name}
            {item.subItems && item.subItems.map((subItem, subIndex) => (
                <div key={subIndex}>
                    {subItem}
                </div>
            ))}
        </StyledSubMenu>
    );
};