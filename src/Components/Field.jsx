import { useEffect, useState } from "react";
import { GiCrossMark, GiSinkingShip, GiBigWave } from "react-icons/gi";
import FieldState from "./FieldState";
import "./board.css";

const Field = ({ state }) => {
  const [backgroundColor, setBackgroundColor] = useState("#89cdfb99");
  const [content, setContent] = useState(null);

  const handleContentChange = async () => {
    switch (state) {
      case FieldState.Empty:
        setContent("");
        setBackgroundColor("#89cdfb99");
        break;
      case FieldState.Miss:
        setBackgroundColor("#3b8ec5ee");
        setContent(<GiBigWave style={{ color: "#003790" }} />);
        break;
      case FieldState.Hit:
        setBackgroundColor("#c1c1c1ee");
        setContent(<GiCrossMark style={{ color: "#bb0000" }} />);
        break;
      case FieldState.Sunk:
        setBackgroundColor("#c1c1c1ee");
        setContent(<GiSinkingShip style={{ color: "#3d0000" }} />);
        break;
      case FieldState.Occupied:
        setBackgroundColor("#c1c1c1ee");
        break;
      default:
        setBackgroundColor("#89cdfb99");
        setContent(null);
        break;
    }
  };

  useEffect(() => {
    handleContentChange();
  }, [state]);

  return (
    <div className="field" style={{ background: backgroundColor }}>
      <span className="field-icon">{content}</span>
    </div>
  );
};
export default Field;
