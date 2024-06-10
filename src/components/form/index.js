import "./form.css";
import TextField from "../textField";
import Dropdown from "../dropdown";
import Button from "../button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

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
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          changeValue={(value) => setNome(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          changeValue={(value) => setCargo(value)}
        />
        <TextField
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
    </section>
  );
};

export default Form;
