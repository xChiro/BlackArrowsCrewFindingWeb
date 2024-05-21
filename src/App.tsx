import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import {Outlet} from "react-router-dom";

const App = () => {

    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}

export default App
