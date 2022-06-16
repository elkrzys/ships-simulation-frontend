import { useEffect, useState } from "react";
import { FieldState } from "../strings";
import Row from "./Row";
import "../styles/board.css";

const Board = ({ boardFields }) => {
  const [rows, setRows] = useState([]);

  const handleRowsAndFields = async () => {
    let tempRows = [];

    for (let row = 1; row < 11; row++) {
      let fields = [];

      for (let column = 1; column < 11; column++) {
        let field = boardFields?.find(
          (f) => f.position.row === row && f.position.column === column
        ) ?? { state: FieldState.Empty };

        fields.push(field);
      }

      tempRows.push(fields);
    }

    setRows(tempRows);
  };

  useEffect(() => {
    handleRowsAndFields();
  }, [boardFields]);

  return (
    <div className="board">
      {rows.map((row, index) => (
        <Row key={index} fields={row} />
      ))}
    </div>
  );
};

export default Board;
