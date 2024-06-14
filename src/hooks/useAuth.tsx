import {useNavigate} from "react-router-dom";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";
import {useContext} from "react";

export const useAuth = () => {
    const {logIn, logOut, idToken, loginInProgress} = useContext<IAuthContext>(AuthContext);
    const navigate = useNavigate();

    const getAccessToken = () => {
        return idToken;
    };

    const login = () => {
        logIn(undefined, undefined, "redirect");
    }

    const logout = () => {
        logOut(undefined, undefined, undefined);
        navigate('/');
    }

    const isLogged = () => {
        return idToken !== undefined;
    }

    return {isLogged, getAccessToken, logout, login, loginInProgress};
};