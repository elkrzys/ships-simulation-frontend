import { useEffect } from "react";

const Button = ({ text, handleSimulationState }) => {
  useEffect(() => {}, [text]);
  return (
    <div className="play-button">
      <button onClick={async () => await handleSimulationState()}>
        {text}
      </button>
    </div>
  );
};
export default Button;
