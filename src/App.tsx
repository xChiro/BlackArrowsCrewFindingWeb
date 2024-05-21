import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

const App = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) return;

        const playerServices = new PlayerService()

        playerServices.getCurrenProfile().then((profile) => {
            if(!profile) {
                navigate('/profile/create');
            }
        });
    }, [isAuthenticated])

    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}

export default App
