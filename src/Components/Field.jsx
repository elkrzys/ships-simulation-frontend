import { useEffect, useState } from "react";
import { GiCrossMark, GiSinkingShip, GiBigWave } from "react-icons/gi";
import { FieldState } from "../strings";
import "../styles/board.css";

const Field = ({ state }) => {
  const [backgroundColor, setBackgroundColor] = useState("#89cdfb99");
  const [content, setContent] = useState(null);

  const handleContentChange = async () => {
    const shipBg = "#d4d4d4ea";
    switch (state) {
      case FieldState.Empty:
        setContent("");
        setBackgroundColor("#89cdfb99");
        break;
      case FieldState.Miss:
        setBackgroundColor("#3a9adaed");
        setContent(<GiBigWave style={{ color: "#003790" }} />);
        break;
      case FieldState.Hit:
        setBackgroundColor(shipBg);
        setContent(<GiCrossMark style={{ color: "#bb0000" }} />);
        break;
      case FieldState.Sunk:
        setBackgroundColor(shipBg);
        setContent(<GiSinkingShip style={{ color: "#840000" }} />);
        break;
      case FieldState.Occupied:
        setBackgroundColor(shipBg);
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
