import {useNavigate} from 'react-router-dom';
import {colors} from '../../themes/Colors.ts';
import {useAuth} from '../../hooks/useAuth.tsx';
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {MenuButton} from "./MenuButton.tsx";
import {useDeleteAccount} from "../../hooks/useDeleteAccount.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {StyledTopMenuLabel} from "./StyledTopMenuLabel.tsx";
import {NavUserContainer, StyledSubMenu} from "./StyledSubMenu.tsx";

export const NavUserComponent = () => {
    const {isLogged, logout, login} = useAuth();
    const {profile} = usePlayer();
    const navigate = useNavigate();
    const {ModalComponent, deleteAccount} = useDeleteAccount();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const handlerChangeName = () => {
        navigate('/profile/update');
    }

    const handleRemoveAccount = () => {
        deleteAccount();
    }

    return (
        <>
            {isLogged() ? (
                <NavUserContainer>
                    <StyledTopMenuLabel style={{margin: "5 .5rem"}}>
                        {profile?.CitizenName || "My User"}
                    </StyledTopMenuLabel>
                    <FontAwesomeIcon icon={faUser} />
                    <StyledSubMenu>
                        <a onClick={handlerChangeName}>Change Handler Name</a>
                        <a style={{color: colors.redAlertColor}} onClick={handleRemoveAccount}>Remove Account</a>
                        <a style={{color: colors.redAlertColor}} onClick={handleLogout}>Log Out</a>
                    </StyledSubMenu>
                </NavUserContainer>
            ) : (
                <MenuButton fontSize={".8rem"} minFontSize={".6rem"} onClick={login} backgroundColor={colors.darkcyan}>
                    Sign in with Discord
                </MenuButton>
            )}
            <ModalComponent/>
        </>
    );
};