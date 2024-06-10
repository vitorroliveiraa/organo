/* eslint-disable react-hooks/rules-of-hooks */
import "./textField.css";

const textField = (props) => {
  const changeValue = (event) => {
    props.changeValue(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={changeValue}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default textField;
