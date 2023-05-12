import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = fetch("http://localhost:3000/api/projects");
      const responseJson = await response.json();
      setProjects(responseJson)
    } catch (error) {
      console.log("error projects", error);
    }
  };
  return (
    <section>
      <PageDescription
        title="Admin"
        description="here you will be able to add update your projects"
      />
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}
