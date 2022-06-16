import { useEffect } from "react";

const Results = ({
  beginner,
  winner,
  totalRounds,
  playerOneShots,
  playerTwoShots,
}) => {
  return (
    <div className="flex-v results">
      <h3>Results</h3>
      <h4>{beginner && beginner + " started the game"} </h4>
      <h4>{winner && winner + " won!"} </h4>
      <h4>{totalRounds && "Total rounds: " + totalRounds}</h4>
      {playerOneShots && <p>Player 1 fired {playerOneShots} times</p>}
      {playerTwoShots && <p>Player 2 fired {playerTwoShots} times</p>}
    </div>
  );
};
export default Results;
