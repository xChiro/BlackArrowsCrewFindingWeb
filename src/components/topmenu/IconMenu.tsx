import React, { useState, useRef, useEffect, FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../themes/Colors';

interface SubMenuProps {
    icon: React.ReactNode;
    items:  React.ReactNode[];
    closeMenu?: boolean;
}

export const StyledSubMenu = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${colors.secondary};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: max-content;
    text-align: left;
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 0.7rem;

    & a {
        color: white;
        padding: 0.5rem;
        text-decoration: none;
        display: block;
    }

    & a:hover {
        background-color: ${colors.primary};
        border-radius: 0.4rem;
    }
`;

const HoverContainer = styled.div`
    position: relative;
`;

const IconContainer = styled.div`
    cursor: pointer;
`;

const IconMenu: FC<SubMenuProps> = ({ icon, items, closeMenu = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (closeMenu) {
            setIsOpen(false);
        }
    }, [closeMenu]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HoverContainer ref={menuRef}>
            <IconContainer onClick={toggleMenu}>
                {icon}
            </IconContainer>
            <StyledSubMenu isOpen={isOpen}>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item}
                    </React.Fragment>
                ))}
            </StyledSubMenu>
        </HoverContainer>
    );
};

export default IconMenu;
