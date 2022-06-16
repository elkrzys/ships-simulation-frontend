import Board from "./Board";
import Actions from "../actions/Actions";
import Button from "./Button";
import { SimulationStatus } from "../strings";
import { useState } from "react";
import "../styles/container.css";
import Results from "./Results";

const Simulation = () => {
  const [gameResult, setGameResult] = useState(null);
  const [buttonText, setButtonText] = useState("Simulate");

  const handleSimulationRequest = async () => {
    const response = await Actions.startSimulation();
    if (response.status === SimulationStatus.success) {
      setGameResult(JSON.parse(JSON.stringify(response.data)));
    } else {
      alert("Something went wrong :(");
    }
  };

  const handleSimulationState = async () => {
    if (!gameResult) {
      handleSimulationRequest();
      setButtonText("Reset");
    } else {
      setGameResult(null);
      setButtonText("Simulate");
    }
  };

  return (
    <div className="container">
      <div className="flex-v">
        <header>
          <h1>Battleship simulation</h1>
        </header>
        <div className="flex-h">
          <div className="flex-v">
            <Board boardFields={gameResult?.player1.ownBoard.fields} />
            <h3>Player 1</h3>
          </div>
          <Results
            beginner={gameResult?.beginner}
            winner={gameResult?.winner}
            totalRounds={gameResult?.totalRounds}
            playerOneShots={gameResult?.player1.totalShots}
            playerTwoShots={gameResult?.player2.totalShots}
          />
          <div className="flex-v">
            <Board boardFields={gameResult?.player2.ownBoard.fields} />
            <div>
              <h3>Player 2</h3>
            </div>
          </div>
        </div>
        <div className="flex-h">
          <Button
            text={buttonText}
            handleSimulationState={handleSimulationState}
          />
        </div>
      </div>
      <footer>
        <h5>Created by Krzysztof Lipiec &copy;</h5>
      </footer>
    </div>
  );
};

export default Simulation;
