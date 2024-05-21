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

    ul {
        list-style-type: none; 
        margin: 0;          
        padding: 0;  
    }
`;

interface MainSubMenuProps {
    items: MenuItem[];
    handleMouseLeave: () => void;
    margin?: string;
}

export const ContextMenuComponent = (props: MainSubMenuProps) => {
    return (
        <StyledSubMenu margin={props.margin} onMouseLeave={props.handleMouseLeave}>
            <ul>
                {props.items.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={() => subItem.onClick()}>
                        {subItem.name}
                    </li>
                ))}
            </ul>
        </StyledSubMenu>
    );
};