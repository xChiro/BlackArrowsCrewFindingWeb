import {useNavigate} from "react-router-dom";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";
import {useContext} from "react";
import {jwtDecode} from "jwt-decode";

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

    const getUserId = (): string | undefined => {
        const token = getAccessToken();
        if(token === undefined) return undefined;

        try {
            const decoded = jwtDecode(token!);
            return decoded.sub;
        } catch(e) {
            return undefined;
        }
    }

    return {isLogged, getAccessToken, logout, login, loginInProgress, getUserId};
};