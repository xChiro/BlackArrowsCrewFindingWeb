import styled from "styled-components";
import {MenuItem} from "./MenuItem.tsx";
import {colors} from "../../../themes/Colors.ts";

const StyledSubMenu = styled.div<{ margin?: string }>`
    position: absolute;
    top: 100%;
    background-color: ${colors.primary};
    margin: ${props => props.margin ? props.margin : '0'};
    z-index: 1;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${colors.primary};
`;

interface MainSubMenuProps {
    items: MenuItem[];
    handleMouseLeave: () => void;
    margin?: string;
}

export const ContextMenuComponent = (props: MainSubMenuProps) => {
    return (
        <StyledSubMenu margin={props.margin} onMouseLeave={props.handleMouseLeave}>
            {props.items.map((subItem, subIndex) => (
                <div key={subIndex} onClick={subItem.onClick}>
                    {subItem.name}
                </div>
            ))}
        </StyledSubMenu>
    );
};