import {useAuth} from "../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";
import {useDeleteAccount} from "../../hooks/useDeleteAccount.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import IconMenu from "./IconMenu.tsx";
import {colors} from "../../themes/Colors.ts";
import {useState} from "react";

export const UserIconMenu = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {deleteAccount} = useDeleteAccount();
    const [closeMenu, setCloseMenu] = useState(false);

    const handleLogout = () => {
        setCloseMenu(true);
        logout();
        navigate("/");
    };
    const handlerChangeName = () => {
        setCloseMenu(true);
        navigate("/profile/update");
    };
    const handleRemoveAccount = () => {
        setCloseMenu(true);
        deleteAccount();
    };

    return (
        <IconMenu icon={<FontAwesomeIcon icon={faUser}/>} closeMenu={closeMenu} items={
            [
                <a onClick={handlerChangeName}>
                    Change Handler Name
                </a>,

                <a style={{color: colors.redAlertColor}} onClick={handleRemoveAccount}>
                    Remove Account
                </a>,

                <a style={{color: colors.redAlertColor}} onClick={handleLogout}>
                    Log Out
                </a>
                ,
            ]}/>);
}