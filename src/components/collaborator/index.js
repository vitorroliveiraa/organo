import "./collaborator.css";

const Collaborator = ({ nome, cargo, imagem, backgroundColor }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
