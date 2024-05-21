import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useAuth0} from "@auth0/auth0-react";

const App = () => {
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        if(!isAuthenticated) return;

        const playerServices = new PlayerService()

        playerServices.getCurrenProfile().then((profile) => {
            if(profile === null) {
                window.location.href = "/profile/create"
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
