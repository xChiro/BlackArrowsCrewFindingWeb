import styled from "styled-components";
import {MenuItem} from "./MenuItem.tsx";
import {colors} from "../../../themes/Colors.ts";

const StyledSubMenu = styled.div<{ left?: number, right?: number }>`
    position: absolute;
    top: 100%;
    background-color: ${colors.primary};
    left: ${props => props.left !== null ? `${props.left}px` : 'auto'};
    right: ${props => props.right !== null ? `${props.right}px` : 'auto'};
    z-index: 1;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${colors.primary};
`;

interface MainSubMenuProps {
    items: MenuItem[];
    handleMouseLeave: () => void;
    left?: number;
    right?: number;
}

export const ContextualMenuComponent = (props: MainSubMenuProps) => {
    return (
        <StyledSubMenu left={props.left} right={props.right} onMouseLeave={props.handleMouseLeave}>
            {props.items.map((subItem, subIndex) => (
                <div key={subIndex} onClick={subItem.onClick}>
                    {subItem.name}
                </div>
            ))}
        </StyledSubMenu>
    );
};