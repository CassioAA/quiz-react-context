import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Setup() {
    const { setGameState, setUserName } = useContext(GameStateContext);

    return (
        <div className="Setup">
            <label>Insira seu nome:</label>
            <input 
                type="text" 
                placeholder="Digite seu nome aqui" 
                onChange={ (event) => {
                    setUserName(event.target.value);
                }}
            />
            <button
                onClick={ () => {
                    setGameState("playing");
                }}
            > 
                Iniciar o Quiz 
            </button>
        </div>
    );
}

export default Setup;