import { useEffect, useState } from "react";
import API from "../../services/api";


function PublicProjects() {
  const [projects, setProjects] = useState([]);


const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);


  // useEffect(() => {
  //   API.get("/project").then((res) => {
  //     setProjects(res.data);
  //   });
  // }, []);

  return (
    <div>
      <h2>My Projects</h2>

      {projects.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PublicProjects;
