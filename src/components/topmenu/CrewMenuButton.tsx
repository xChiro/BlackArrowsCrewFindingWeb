import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {MenuButton} from "./MenuButton.tsx";
import {colors} from "../../themes/Colors.ts";

export const CrewMenuButton = () => {
    const {profile, isInCrew, isProfileLoaded} = usePlayer();
    const {loginWithRedirect} = useAuth0();
    const location = useLocation();
    const navigate = useNavigate();

    const handleViewCrewClick = () => navigate('/crews/' + profile.ActiveCrewId);
    const handleCreateCrewClick = async () => isProfileLoaded() ? navigate('/crews/create') : await loginWithRedirect();
    const handleBackClick = () => navigate('/');

    if (location.pathname.includes('/crews/')) {
        return <MenuButton backgroundColor={colors.lightBlueColor} text={"Go Back"} onClick={handleBackClick} />;
    }

    return isInCrew()
        ? <MenuButton backgroundColor={colors.lightBlueColor} text={"View My Crew"} onClick={handleViewCrewClick} />
        : <MenuButton backgroundColor={colors.greenColor}  text={"Create Crew"} onClick={handleCreateCrewClick} />;
};