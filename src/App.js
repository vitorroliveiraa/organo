import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import Squad from "./components/squad";
import Footer from "./components/footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-end",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: squads[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: squads[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: squads[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: squads[5].name,
    },
  ];

  const [collaborators, setCollaborators] = useState(inicial);

  const novoColaboradorCadastrado = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function removeCollaborator(id) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeColorSquad(color, id) {
    setSquads(
      squads.map((squad) => {
        if (squad.id === id) {
          squad.color = color;
        }
        return squad;
      })
    );
  }

  function handleRegisterTeam(newTeam) {
    setSquads([...squads, { ...newTeam, id: uuidv4() }]);
  }

  function handleFavorite(id) {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id)
          collaborator.favorite = !collaborator.favorite;
        return collaborator;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        squadName={squads.map((squad) => squad.name)}
        aoColaboradorCadastrado={(collaborator) =>
          novoColaboradorCadastrado(collaborator)
        }
        registerTeam={handleRegisterTeam}
      />
      {squads.map((squad) => (
        <Squad
          key={squad.name}
          squad={squad}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === squad.name
          )}
          remove={removeCollaborator}
          changeColor={changeColorSquad}
          favorite={handleFavorite}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
