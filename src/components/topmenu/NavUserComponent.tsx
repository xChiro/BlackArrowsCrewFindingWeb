import {faUser} from "@fortawesome/free-solid-svg-icons";
import {StyledNavBarIcon} from "./StyledNavBarIcon.tsx";
import {useAuth0} from "@auth0/auth0-react";
import styled from 'styled-components';
import {ContextMenuComponent} from "./main/ContextMenuComponent.tsx";
import {useState} from "react";

const StyledLoginButton = styled.button`
    background-color: darkcyan;
    height: 80%;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    position: relative;
`;

export const NavUserComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const onUserIconClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            {isAuthenticated ? (
                <div>
                    <StyledNavBarIcon icon={faUser} onClick={onUserIconClick}/>
                    {isOpen && (
                        <ContextMenuComponent margin={"0 0 0 -45px"} items={[{name: 'Logout', onClick: () => handleLogout}]}
                                              handleMouseLeave={handleMouseLeave}/>
                    )}
                </div>
            ) : (
                <div>
                    <StyledLoginButton onClick={() => loginWithRedirect()}>
                        Login / Join
                    </StyledLoginButton>
                </div>
            )}
        </>
    );
};