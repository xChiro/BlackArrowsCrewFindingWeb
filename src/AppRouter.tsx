import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateProfile from "./components/players/CreateProfileComponent.tsx";
import CreateCrewComponent from "./components/crews/create/CreateCrewComponent.tsx";
import RecentCrewCardContainer from "./components/crews/cards/RecentCrewCardContainer.tsx";
import CrewViewWrapper from "./components/crews/CrewViewWrapper.tsx";
import PrivacyAdvice from "./components/legals/PrivacyAdviceComponent.tsx";
import UpdateProfileName from "./components/players/UpdateProfileNameComponent.tsx";
import ProtectedRoute from "./components/utilities/routes/ProtectedRoute.tsx";
import TermsOfServices from "./components/legals/TermsOfServicesComponent.tsx";

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
                        element: <ProtectedRoute><CreateProfile/></ProtectedRoute>,
                    },
                    {
                        path: "update",
                        element: <ProtectedRoute><UpdateProfileName/></ProtectedRoute>,
                    }
                ],
            },
            {
                path: "/crews",
                children: [
                    {
                        path: "create",
                        element: <ProtectedRoute><CreateCrewComponent/></ProtectedRoute>,
                    },
                    {
                        path: ":crewId",
                        element: <ProtectedRoute><CrewViewWrapper/></ProtectedRoute>,
                    }
                ],
            },
            {
                path: "/privacy",
                element: <PrivacyAdvice/>,
            },
            {
                path: "/terms",
                element: <TermsOfServices/>,
            }
        ]
    }
]);