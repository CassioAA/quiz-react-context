import "./App.css";
import Setup from './components/Setup.jsx';
import Quiz from "./components/Quiz.jsx";
import { useState } from "react"; 
import { GameStateContext } from "./helpers/Contexts";

function App() {
    const [gameState, setGameState] = useState("setup");
    const [userName, setUserName] = useState("");

    return (
        <div className="App">
            <h1>Quiz</h1>
            <GameStateContext.Provider 
                value={{ 
                    setGameState,
                    setUserName,
                }}
            >
                { gameState === "setup" && <Setup /> }
                { gameState === "playing" && <Quiz /> }
            </GameStateContext.Provider>
        </div>
    );
}

export default App;