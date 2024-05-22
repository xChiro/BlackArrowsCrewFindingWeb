import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {useAuthToken} from "./hooks/UseAuthToken.tsx";

const App = () => {
    const {isAuthenticated} = useAuth0();
    const navigate = useNavigate();
    const authToken = useAuthToken();

    useEffect(() => {
        if (!isAuthenticated) return;
        authToken().then((token) => {
            const playerServices = new PlayerService(token)

            playerServices.getCurrenProfile().then((profile) => {
                if (!profile) {
                    navigate('/profile/create');
                }
            });
        });
    }, [isAuthenticated])

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default App
