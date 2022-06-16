import { useEffect, useState } from "react";
import FieldState from "./FieldState";
import Row from "./Row";
import "./board.css";

const Board = ({ board }) => {
  const [rows, setRows] = useState([]);

  const handleRowsAndFields = async () => {
    let tempRows = [];

    for (let row = 1; row < 11; row++) {
      let fields = [];

      for (let column = 1; column < 11; column++) {
        let field = board?.find(
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
  }, [board]);

  return (
    <div className="board">
      {rows.map((row, index) => (
        <Row key={index} fields={row} />
      ))}
    </div>
  );
};

export default Board;
