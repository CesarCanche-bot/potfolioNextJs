import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddNewProjectModal from "@/components/modals/AddNewProjectModal";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [isNewProjectModalVisible, setIsNewProjectModalVisible] =
    useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOnSubmit = (values) => {
    setProjects((prev) => [...prev, { ...values, _id: projects.length + 1 }]);
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/projects");
      const responseJson = await response.json();
      setProjects(responseJson);
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
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsNewProjectModalVisible(true)}
        >
          Add new project
        </Button>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
      <AddNewProjectModal
        open={isNewProjectModalVisible}
        onClose={() => setIsNewProjectModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </section>
  );
}
