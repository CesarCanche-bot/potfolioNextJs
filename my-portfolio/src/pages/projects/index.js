import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function ProjectsPage({ projects }) {
  return (
    <section>
      <PageDescription
        title="Projects"
        description="here are some of my projects"
      />
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}

export async function getServerSideProps() {
    let projects = [];

    try {
      const response = await fetch(
        "http://localhost:3000/api/projects"
      );
       projects = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  return {
    props: {
      projects
    },
  };
}
