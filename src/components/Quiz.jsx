import "../App.css";
import { Questions } from "../helpers/Questions.js";
import { GameStateContext } from "../helpers/Contexts";
import {useContext, useState} from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

	const { score, setScore, setGameState } = useContext(GameStateContext);

	function chooseOption(option) {
		setOptionChosen(option);
	}

	function checkAnswer() {
		if (Questions[currentQuestion].answer === optionChosen) {
			alert("Correto");
			setScore(score + 1);
		} else {
			alert("Incorreto");
		}
	}

	function nextQuestion() {
		checkAnswer();
		setCurrentQuestion(currentQuestion + 1);
	}

	function finishQuiz () {
		checkAnswer();
		setGameState("finished");
	}

	return (
		<>
			<div className="Quiz">
				<h1>{Questions[currentQuestion].prompt}</h1>
				<button
					onClick={() => {
						chooseOption("optionA");
					}}
				>
					{Questions[currentQuestion].optionA}
				</button>
				<button
					onClick={() => {
						chooseOption("optionB");
					}}
				>
					{Questions[currentQuestion].optionB}
				</button>
				<button
					onClick={() => {
						chooseOption("optionC");
					}}
				>
					{Questions[currentQuestion].optionC}
				</button>
				<button
					onClick={() => {
						chooseOption("optionD");
					}}
				>
					{Questions[currentQuestion].optionD}
				</button>
				{currentQuestion === Questions.length - 1
					?
						<button onClick={finishQuiz} id="nextQuestion">
							Resultado
						</button>
					:
						<button onClick={nextQuestion} id="nextQuestion">
							Próxima
						</button>
				}
			</div>
		</>
	);
}

export default Quiz;