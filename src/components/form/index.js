import "./form.css";
import Field from "../field";
import Dropdown from "../dropdown";
import Button from "../button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nameSquad, setNameSquad] = useState("");
  const [colorSquad, setColorSquad] = useState("");

  const save = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="section-form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          changeValue={(value) => setNome(value)}
        />
        <Field
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          changeValue={(value) => setCargo(value)}
        />
        <Field
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          changeValue={(value) => setImagem(value)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={props.squadName}
          valor={time}
          changeValue={(value) => setTime(value)}
        />
        <Button>Criar card</Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.registerTeam({ name: nameSquad, color: colorSquad });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          value={nameSquad}
          changeValue={(value) => setNameSquad(value)}
        />
        <Field
          type="color"
          required={true}
          label="Cor"
          placeholder="Digite a cor do time"
          value={colorSquad}
          changeValue={(value) => setColorSquad(value)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
