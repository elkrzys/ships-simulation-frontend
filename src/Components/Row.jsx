import Field from "./Field";
import "./board.css";

const Row = ({ fields }) => {
  return (
    <div className="row">
      {fields.map((field, index) => (
        <Field key={index} state={field.state} />
      ))}
    </div>
  );
};

export default Row;
