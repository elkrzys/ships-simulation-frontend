const Results = ({ beginner, winner, totalRounds }) => {
  return (
    <div className="flex-v results">
      <h3>Results</h3>
      <h4>{beginner && "Beginner: " + beginner} </h4>
      <h4>{winner && "Winner: " + winner} </h4>
      <h4>{totalRounds && "Total rounds: " + totalRounds}</h4>
    </div>
  );
};
export default Results;
