import {faUser} from "@fortawesome/free-solid-svg-icons";
import {StyledNavBarIcon} from "./StyledNavBarIcon.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {StyledLoginButton} from "./StyledLoginButton.tsx";
import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";

const NavUserContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const ContextMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: ${colors.primary};
    padding: 10px;
    z-index: 1000;
    min-width: 150px;
`;

const ContextMenuItem = styled.div`
    padding: 8px;
    cursor: pointer;

    &:hover {
        background: ${colors.secondary};
    }
`;

export const NavUserComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    const navigate = useNavigate();

    const onUserIconClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleLogout = () => {
        logout().then(() => {
            navigate('/');
        });
    }

    return (
        <>
            {isAuthenticated ? (
                <NavUserContainer>
                    <StyledNavBarIcon icon={faUser} onClick={onUserIconClick}/>
                    {isOpen && (
                        <ContextMenu onMouseLeave={handleMouseLeave}>
                            <ContextMenuItem onClick={handleLogout}>Logout</ContextMenuItem>
                        </ContextMenu>
                    )}
                </NavUserContainer>
            ) : (
                <StyledLoginButton onClick={() => loginWithRedirect()}>
                    Login / Join
                </StyledLoginButton>
            )}
        </>
    );
};
