import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projectos";

function App() {
  const [projects, setProjects] = useState(() => {
    const localStoregeProjects = JSON.parse(
      localStorage.getItem("@projectos:repositorios")
    );
    if (localStoregeProjects) {
      return localStoregeProjects;
    }
    return [];
  });
  const [chaggesState, setChaggesState] = useState(Boolean);

  const [newProjects, setNewProjects] = useState("");
  useEffect(() => {
    localStorage.setItem("@projectos:repositorios", JSON.stringify(projects));
  }, [projects]);

  function handleAddProject() {
    setProjects([...projects, { name: ` ${newProjects}`, state: false }]);
    setNewProjects("");
  }
  return (
    <>
      <Header title="Todos" />
      <div className="box">
        {projects.map((project) => (
          <div className="item" key={project.name}>
            <input
              type="checkbox"
              name={project.name}
              id={project.name}
              checked={chaggesState}
              onChange={(e) => {
                setChaggesState(!!project.state);
              }}
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
      <div className="box">
        <div className="item">
          <input
            type="text"
            name="newList"
            id="newList"
            value={newProjects}
            onChange={(e) => setNewProjects(e.target.value)}
          />
          <button type="button" onClick={handleAddProject} id="button">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
