
import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {

const [form, setForm] = useState({
  title: "",
  description: "",
});

const createProject = async (e) => {
  e.preventDefault();
  await API.post("/projects", form);
  setForm({ title: "", description: "" });
  fetchProjects();
};


const [projects, setProjects] = useState([]);

const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    
    <div>
      
<form onSubmit={createProject}>
  <input
    placeholder="Title"
    value={form.title}
    onChange={(e) => setForm({ ...form, title: e.target.value })}
  /><br />

  <input
    placeholder="Description"
    value={form.description}
    onChange={(e) => setForm({ ...form, description: e.target.value })}
  /><br />

  <button type="submit">Add Project</button>
</form>

<h2>Projects</h2>
      {projects.map((project) => (
        <div key={project._id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <button onClick={() => deleteProject(project._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
