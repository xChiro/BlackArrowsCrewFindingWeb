import {useAuth} from "../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";
import {useDeleteAccount} from "../../hooks/useDeleteAccount.tsx";
import {HoverContainer, StyledSubMenu} from "./StyledSubMenu.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {colors} from "../../themes/Colors.ts";
import {NavUserContainer} from "./ProfileNavComponent.tsx";

export const UserIconMenu = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {deleteAccount} = useDeleteAccount();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handlerChangeName = () => {
        navigate("/profile/update");
    };

    const handleRemoveAccount = () => {
        deleteAccount();
    };

    return (
        <HoverContainer>
            <NavUserContainer>
                <FontAwesomeIcon icon={faUser}/>
                <StyledSubMenu>
                    <a onClick={handlerChangeName}>Change Handler Name</a>
                    <a style={{color: colors.redAlertColor}} onClick={handleRemoveAccount}>
                        Remove Account
                    </a>
                    <a style={{color: colors.redAlertColor}} onClick={handleLogout}>
                        Log Out
                    </a>
                </StyledSubMenu>
            </NavUserContainer>
        </HoverContainer>);
}