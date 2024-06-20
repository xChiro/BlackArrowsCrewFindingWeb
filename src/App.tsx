import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useNavigate} from "react-router-dom";
import {useAuth} from "./hooks/useAuth.tsx";
import {useDispatch} from "react-redux";
import {createProfile} from "./stores/PlayerProfileSlice.ts";
import styled from "styled-components";
import Footer from "./components/footer/FooterComponent.tsx";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 4rem 0;
`;

const App = () => {
    const {isLogged, loginInProgress, getAccessToken, login} = useAuth();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (loginInProgress || !isLogged()) return;

        const token = getAccessToken() ?? "";
        const playerServices = new PlayerService(token)

        playerServices.getCurrenProfile()
            .then(profile => {
                dispatch(createProfile(profile));
            })
            .catch(error => {
                console.log(error);
                if(error.message.includes("404"))
                    navigate('/profile/create');
                if (error.message.includes("401"))
                    login();
            });
    }, [isLogged, loginInProgress, getAccessToken, dispatch, navigate, login]);

    return (
        <>
            <Navbar/>
            <StyledContainer>
                <Outlet/>
            </StyledContainer>
            <Footer/>
        </>
    )
}

export default App