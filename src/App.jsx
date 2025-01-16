import './App.css';
import Setup from './components/Setup.jsx';
import { useState } from 'react';

function App() {
    const [gameState, setGameState] = useState("setup");
    return (
        <div className="App">
            <h1>Quiz</h1>
            {gameState === "setup" && <Setup />}
        </div>
    );
}

export default App;