import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

function End() {
    const { score, setScore, setGameState, userName } = useContext(
        GameStateContext
    );

    function restartQuiz ()  {
        setScore(0);
        setGameState("setup");
    }

    return (
        <div className="End">
            <h1>Fim</h1>
            <h3>{userName}</h3>
            <h1>
                {score} / {Questions.length}
            </h1>
            <button onClick={restartQuiz}>Recomeçar</button>
        </div>
    );
}

export default End;