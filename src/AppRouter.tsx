import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import RecentCrews from "./components/crews/cards/RecentCrewsComponent.tsx";
import CreateProfile from "./components/players/CreateProfileComponent.tsx";
import CreateCrewComponent from "./components/crews/create/CreateCrewComponent.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
        children: [
            {
                index: true,
                element:  <RecentCrews />,
            },
            {
                path: "/profile/create",
                element: <CreateProfile />,
            },
            {
                path: "/Crew/Create",
                element: <CreateCrewComponent />,
            }
        ]
    }
]);