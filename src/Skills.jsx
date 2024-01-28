import { skills } from "./data";
import "./Skills.css";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="row" id="skills" style={{ paddingBottom: 30 }}>
      <SectionTitle text="My Tech Stack" />
      <div
        // className="col__3"
        style={{
          marginTop: 60,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: 24,
          columnGap: 50,
        }}
      >
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
