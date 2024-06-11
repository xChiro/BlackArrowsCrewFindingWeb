import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {MenuButton} from "./MenuButton.tsx";
import {colors} from "../../themes/Colors.ts";
import {useAuth} from "../../hooks/useAuth.tsx";

export const CrewMenuButton = () => {
    const {profile, isInCrew} = usePlayer();
    const {login, isLogged} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleViewCrewClick = () => navigate('/crews/' + profile.ActiveCrewId);
    const handleCreateCrewClick = async () => isLogged() ? navigate('/crews/create') : await login();
    const handleBackClick = () => navigate('/');

    if (location.pathname.includes('/crews/')) {
        return <MenuButton backgroundColor={colors.lightBlueColor} text={"Go Back"} onClick={handleBackClick} />;
    }

    return isInCrew()
        ? <MenuButton backgroundColor={colors.lightBlueColor} text={"View My Crew"} onClick={handleViewCrewClick} />
        : <MenuButton backgroundColor={colors.greenColor} text={isLogged() ? "Create Crew" : "Sign In to Create"} fontSize={isLogged() ? "1rem" : ".8rem"} onClick={handleCreateCrewClick} />;
};