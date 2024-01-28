import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article
      className="row"
      style={{
        width: 400,
        backgroundColor: "linear-gradient(90deg, #f61b10, #ef0963)",
        borderRadius: 20,
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          objectFit: "cover",
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          height: 256,
        }}
      />
      <div style={{ padding: 18 }}>
        <h2
          style={{
            fontSize: 20,
            lineHeight: 2,
            fontWeight: 500,
            color: "white",
          }}
        >
          {title}
        </h2>
        <p style={{ marginTop: 16, color: "#ffffffa3" }}>{text}</p>
        <div style={{ display: "flex", marginTop: 16, columnGap: 12 }}>
          <a href={url} target="_blank">
            <TbWorldWww
              style={{
                opacity: 1,
                height: 32,
                width: 32,
              }}
            />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare
              style={{
                opacity: 1,
                height: 32,
                width: 32,
              }}
            />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
