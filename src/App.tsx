import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

const App = () => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            loginWithRedirect();
        }
    }, [isAuthenticated, loginWithRedirect, isLoading]);

    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}

export default App
