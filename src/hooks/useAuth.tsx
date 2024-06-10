import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const {isAuthenticated, loginWithRedirect, getAccessTokenSilently, logout} = useAuth0();
    const navigate = useNavigate();

    const getToken = async () => {
        return await getAccessTokenSilently();
    };

    const login = async () => {
        await loginWithRedirect();
    }

    const closeSession = () => {
        logout().then(() => {
            navigate('/');
        });
    }

    const isLogged = () => {
        return isAuthenticated;
    }

    return {isLogged, getToken, closeSession, login};
};