import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import RecentCrews from "./components/crews/cards/RecentCrewsComponent.tsx";
import CreateProfile from "./components/players/CreateProfileComponent.tsx";

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
            }
        ]
    }
]);