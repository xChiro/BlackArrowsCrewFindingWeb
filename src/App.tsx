import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import PlayerService from './services/PlayerService.ts';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {useAuthToken} from "./hooks/UseAuthToken.tsx";
import {useDispatch} from "react-redux";
import {createProfile} from "./stores/PlayerProfileSlice.ts";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
`;

const App = () => {
    const {isAuthenticated, isLoading} = useAuth0();
    const navigate = useNavigate();
    const authToken = useAuthToken();

    const dispatch = useDispatch();


    useEffect(() => {
        if (isLoading || !isAuthenticated) return;

        authToken().then((token: string) => {
            const playerServices = new PlayerService(token)

            playerServices.getCurrenProfile()
                .then(profile => {
                    dispatch(createProfile(profile));
                })
                .catch(() => {
                    navigate('/profile/create');
                });
        });
    }, [isAuthenticated, isLoading])

    return (
        <>
            <Navbar/>
            <StyledContainer>
            <Outlet/>
            </StyledContainer>
        </>
    )
}

export default App