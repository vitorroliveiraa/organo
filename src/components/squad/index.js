import "./squad.css";
import Collaborator from "../collaborator";

const squad = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section className="squad" style={{ backgroundColor: props.secondColor }}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

        <div className="collaboratorr">
          {props.collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.nome}
              nome={collaborator.nome}
              backgroundColor={props.primaryColor}
              cargo={collaborator.cargo}
              imagem={collaborator.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default squad;
