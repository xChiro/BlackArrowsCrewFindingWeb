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
    const {isLogged, loginInProgress, getAccessToken} = useAuth();
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
            .catch(() => {
                navigate('/profile/create');
            });
    }, [isLogged, loginInProgress, getAccessToken, dispatch, navigate]);

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