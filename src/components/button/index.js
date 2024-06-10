import "./button.css";

const button = (props) => {
  return <button className="btn-default">{props.children}</button>;
};

export default button;
