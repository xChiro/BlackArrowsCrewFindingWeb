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
    const handleCreateCrewClick = async () => isLogged() ? navigate('/crews/create') : login();
    const handleBackClick = () => navigate('/');

    if (location.pathname !== '/' && !location.pathname.includes("profile/create")) {
        return <MenuButton backgroundColor={colors.lightBlueColor} onClick={handleBackClick}>
            Go Back
        </MenuButton>;
    }

    if (location.pathname.includes("profile/create") || !isLogged())
        return null;

    return isInCrew()
        ? <MenuButton backgroundColor={colors.lightBlueColor} onClick={handleViewCrewClick}>
            View My Crew
        </MenuButton>
        : <MenuButton backgroundColor={colors.greenColor} onClick={handleCreateCrewClick}>
            Create Crew
        </MenuButton>;

};