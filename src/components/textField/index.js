import "./textField.css";

const textField = (props) => {
  console.log(props.label);
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default textField;
