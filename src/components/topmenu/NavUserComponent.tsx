import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../themes/Colors.ts';
import {useAuth} from '../../hooks/useAuth.tsx';
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {MenuButton} from "./MenuButton.tsx";

const NavUserContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const SubMenu = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: ${colors.secondary};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: max-content;
    text-align: left;
    cursor: pointer;

    & a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    & a:hover {
        background-color: ${colors.primary};
    }

    ${NavUserContainer}:hover & {
        display: block;
    }
`;

export const NavUserComponent = () => {
    const {isLogged, logout, login} = useAuth();
    const {profile} = usePlayer();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const handlerChangeName = () => {
        navigate('/profile/update');
    }

    return (
        <>
            {isLogged() ? (
                <NavUserContainer>
                    <MenuButton fontSize={"1rem"} minFontSize={".6rem"} backgroundColor={colors.darkcyan}>
                        {profile?.CitizenName}
                    </MenuButton>
                    <SubMenu>
                        <a onClick={handlerChangeName}>Change Handler Name</a>
                        <a style={{color: colors.redAlertColor}} onClick={handleLogout}>Log Out</a>
                    </SubMenu>
                </NavUserContainer>
            ) : (
                <MenuButton fontSize={".8rem"} minFontSize={".6rem"} onClick={login} backgroundColor={colors.darkcyan}>
                    Sign in with Discord
                </MenuButton>
            )}
        </>
    );
};