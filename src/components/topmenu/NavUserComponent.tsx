import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";
import {MenuButton} from "./MenuButton.tsx";

const NavUserContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const NavUserComponent = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout().then(() => {
            navigate('/');
        });
    }

    return (
        <>
            {isAuthenticated ? (
                <NavUserContainer>
                    <MenuButton text={"Log Out"} onClick={handleLogout} backgroundColor={colors.lightRed}/>
                </NavUserContainer>
            ) : (
                <MenuButton text={"Sign In"} onClick={loginWithRedirect} backgroundColor={colors.darkcyan}/>
            )}
        </>
    );
};
