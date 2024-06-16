import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";
import {MenuButton} from "./MenuButton.tsx";
import {useAuth} from "../../hooks/useAuth.tsx";

const NavUserContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const NavUserComponent = () => {
    const { isLogged, logout, login} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>
            {isLogged() ? (
                <NavUserContainer>
                    <MenuButton text={"Log Out"} onClick={handleLogout} backgroundColor={colors.lightRed}/>
                </NavUserContainer>
            ) : (
                <MenuButton fontSize={".8rem"}  minFontSize={".6rem"} text={"Sign in with Discord"} onClick={login} backgroundColor={colors.darkcyan}/>
            )}
        </>
    );
};
