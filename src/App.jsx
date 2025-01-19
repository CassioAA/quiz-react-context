import "./App.css";
import Setup from './components/Setup.jsx';
import Quiz from "./components/Quiz.jsx";
import End from "./components/End.jsx";
import { useState } from "react"; 
import { GameStateContext } from "./helpers/Contexts";

function App() {
    const [gameState, setGameState] = useState("setup");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <h1>Quiz</h1>
            <GameStateContext.Provider
                value={{
                    gameState,
                    setGameState,
                    userName,
                    setUserName,
                    score,
                    setScore,
                }}
            >
                { gameState === "setup" && <Setup /> }
                { gameState === "playing" && <Quiz /> }
                {gameState === "finished" && <End />}
            </GameStateContext.Provider>
        </div>
    );
}

export default App;