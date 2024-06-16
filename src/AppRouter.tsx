import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateProfile from "./components/players/CreateProfileComponent.tsx";
import CreateCrewComponent from "./components/crews/create/CreateCrewComponent.tsx";
import RecentCrewCardContainer from "./components/crews/cards/RecentCrewCardContainer.tsx";
import CrewViewWrapper from "./components/crews/CrewViewWrapper.tsx";
import PrivacyAdvice from "./components/privacy/PrivacyAdviceComponent.tsx";
import UpdateProfileName from "./components/players/UpdateProfileNameComponent.tsx";

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
                path: "/profile",
                children: [
                    {
                        path: "create",
                        element: <CreateProfile/>,
                    },
                    {
                        path: "profile/update",
                        element: <UpdateProfileName/>,
                    }
                ],
            },
            {
                path: "/crews",
                children: [
                    {
                        path: "create",
                        element: <CreateCrewComponent/>,
                    },
                    {
                        path: ":crewId",
                        element: <CrewViewWrapper/>,
                    }
                ],
            },
            {
                path: "/privacy",
                element: <PrivacyAdvice/>,
            }
        ]
    }
]);