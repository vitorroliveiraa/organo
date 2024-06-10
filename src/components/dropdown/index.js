import "./dropdown.css";

const dropdown = (props) => {
  return (
    <div className="dropdown-menu">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.changeValue(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default dropdown;
