import "./squad.css";
import Collaborator from "../collaborator";
import hexToRgba from "hex-to-rgba";

const squad = ({ squad, collaborators, remove, changeColor, favorite }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="squad"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(squad.color, "0.5"),
        }}
      >
        <input
          type="color"
          className="input-color"
          value={squad.color}
          onChange={(event) => changeColor(event.target.value, squad.id)}
        />
        <h3 style={{ borderColor: squad.color }}>{squad.name}</h3>

        <div className="collaboratorr">
          {collaborators.map((collaborator, index) => {
            return (
              <Collaborator
                id={collaborator.id}
                key={index}
                nome={collaborator.nome}
                backgroundColor={squad.color}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                remove={remove}
                favorite={favorite}
                collaborator={collaborator}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default squad;
