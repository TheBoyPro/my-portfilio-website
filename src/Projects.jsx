import ProjectsCard from "./ProjectsCard";
import { projects } from "./data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (

    
    <section className="project component__space" id="Portfolio">
      <SectionTitle text="My Latest Projects" />
      <div
        className="container"
        style={{
          marginTop: 60,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: 24,
          columnGap: 50,
        }}
      >
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
