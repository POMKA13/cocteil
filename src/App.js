import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import User from "./components/User/User";
import Greetings from "./components/Greetings/Greetings";
import Why from "./components/Why/Why";
import Stock from "./components/Stock/Stock";
import Reviews from "./components/Reviews/Reviews";
import Question from "./components/Questions/Question";
import Cooperation from "./components/Cooperation/Cooperation";

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
                        <Reviews />
                        <Question />
                        <Cooperation />
                    </main>
            </div>
        </div>
    );
}

export default App;
