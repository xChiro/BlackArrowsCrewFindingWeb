import './App.css'
import Navbar from "./components/topmenu/NavBarComponent.tsx";
import CrewCardContainer from "./components/crews/cards/CrewCardGridComponent.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                <CrewCardContainer />
            </div>
        </>
    )
}

export default App
