import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useNavigate} from "react-router-dom";
import {useAuth} from "./hooks/useAuth.tsx";
import {useDispatch} from "react-redux";
import {createProfile} from "./stores/PlayerProfileSlice.ts";
import styled from "styled-components";
import Footer from "./components/footer/FooterComponent.tsx";
import useSignalR from "./hooks/signalR/useSignalR.tsx";
import {usePlayer} from "./hooks/usePlayerProfile.tsx";
import {ToastContainer} from "react-toastify";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 4rem 0;
    padding-bottom: 2rem;

    @media (max-width: 750px) {
        margin: 4rem 0 2rem 0;
        padding-bottom: 10rem;
    }
`;

const App = () => {
    const {isLogged, loginInProgress, getAccessToken, login} = useAuth();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {startConnection, stopConnection} = useSignalR();
    const {profile, isInCrew} = usePlayer();

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isInCrew())
            stopConnection();
        else
            startConnection();
    }, [isInCrew()]);

    useEffect(() => {
        if (loginInProgress || !isLogged() || profile.Id !== "") {
            return;
        }

        const token = getAccessToken() ?? "";
        const playerServices = new PlayerService(token)

        if (pathname === '/profile/create') return;

        playerServices.getCurrenProfile()
            .then(profile => {
                dispatch(createProfile(profile));
            })
            .catch(error => {
                console.log(error);
                if (error.message.includes("404"))
                    navigate('/profile/create');
                if (error.message.includes("401"))
                    login();
            });
    }, [loginInProgress, isLogged(), getAccessToken(), dispatch, profile, navigate, pathname]);

    return (
        <>
            <ToastContainer/>
            <Navbar/>
            <StyledContainer>
                <Outlet/>
            </StyledContainer>
            <Footer/>
        </>
    )
}

export default App