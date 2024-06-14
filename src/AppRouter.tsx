import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateProfile from "./components/players/CreateProfileComponent.tsx";
import CreateCrewComponent from "./components/crews/create/CreateCrewComponent.tsx";
import RecentCrewCardContainer from "./components/crews/cards/RecentCrewCardContainer.tsx";
import CrewViewWrapper from "./components/crews/CrewViewWrapper.tsx";
import PrivacyAdvice from "./components/privacy/PrivacyAdviceComponent.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <RecentCrewCardContainer/>,
            },
            {
                path: "/profile/create",
                element: <CreateProfile/>,
            },
            {
                path: "/crews/create",
                element: <CreateCrewComponent/>,
            },
            {
                path: "/crews/:crewId",
                element: <CrewViewWrapper/>,
            },
            {
                path: "/privacy",
                element: <PrivacyAdvice/>,
            }
        ]
    }
]);