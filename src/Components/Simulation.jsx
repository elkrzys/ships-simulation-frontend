import Board from "./Board";
import Actions from "../actions/Actions";
import { simulationStatus, gameState } from "../strings";
import { useEffect, useState } from "react";
import "./container.css";

const Simulation = () => {
  const [gameResult, setGameResult] = useState(null);
  const [buttonText, setButtonText] = useState("Simulate");
  const [currentState, setCurrentState] = useState(gameState.init);

  const handleSimulationRequest = async () => {
    const response = await Actions.startSimulation();
    if (response.status === simulationStatus.success) {
      setGameResult(JSON.parse(JSON.stringify(response.data)));
    } else {
      alert("Something went wrong :(");
    }
  };

  const handleSimulationState = async () => {
    if (!gameResult) {
      handleSimulationRequest();
      setCurrentState(gameState.played);
      setButtonText("Reset");
    } else {
      setGameResult(null);
      setCurrentState(gameState.init);
      setButtonText("Simulate");
    }
  };

  return (
    <div className="container">
      <div className="flex-v">
        <div>
          <h1>Battleship simulation</h1>
        </div>
        <div className="flex-h">
          <div className="flex-v">
            <Board
              board={gameResult?.player1.ownBoard.fields}
              gameState={currentState}
            />
            <h3>Player 1</h3>
          </div>
          <div className="flex-v">
            <h4>Beginner: {gameResult?.beginner}</h4>
            <h4>Winner: {gameResult?.winner}</h4>
            <h4>Total rounds: {gameResult?.totalRounds}</h4>
          </div>
          <div className="flex-v">
            <Board
              board={gameResult?.player2.ownBoard.fields}
              gameState={currentState}
            />
            <div>
              <h3>Player 2</h3>
            </div>
          </div>
        </div>
        <div className="flex-h">
          <div className="play-button">
            <button onClick={async () => await handleSimulationState()}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h5>Created by Krzysztof Lipiec &copy;</h5>
      </div>
    </div>
  );
};

export default Simulation;
