import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import Squad from "./components/squad";
import Footer from "./components/footer";

function App() {
  const squads = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secondColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const novoColaboradorCadastrado = (collaborator) => {
    debugger;
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        squadName={squads.map((squad) => squad.name)}
        aoColaboradorCadastrado={(collaborator) =>
          novoColaboradorCadastrado(collaborator)
        }
      />
      {squads.map((squad) => (
        <Squad
          key={squad.name}
          name={squad.name}
          primaryColor={squad.primaryColor}
          secondColor={squad.secondColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === squad.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
