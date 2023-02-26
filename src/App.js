import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import User from "./components/User/User";
import Greetings from "./components/Greetings/Greetings";
import Why from "./components/Why/Why";
import {Routes} from "react-router-dom";
import Stock from "./components/Stock/Stock";

function App() {
    return (

        <div className="App">
            <div className='wrapper'>
                <header className='header'>
                    <Navbar/>
                    <div className='searchContainer'>
                        <Search/>
                        <User/>
                    </div>
                </header>
                    <main>
                        <Greetings/>
                        <Why/>
                        <div className='circle'></div>
                        <Stock />
                    </main>
            </div>
        </div>

    );
}

export default App;
