/* eslint-disable react-hooks/rules-of-hooks */
import "./field.css";

const field = ({
  type = "text",
  label,
  value,
  required = false,
  placeholder,
  changeValue,
}) => {
  const changeValueInput = (event) => {
    changeValue(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={changeValueInput}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default field;
