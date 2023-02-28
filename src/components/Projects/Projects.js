import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectTimeline from "./ProjectTimeline";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <span className="wave" role="img" aria-labelledby="wave">
            🔨
          </span>{" "}
          Encore en cours de <strong className="purple">développement</strong>. {" "}
          <span className="wave" role="img" aria-labelledby="wave">
            🔨
          </span>{" "}
        </h1>
        <p style={{ color: "white" }}>
          Ca risque d'arriver <strong className="purple">si vite</strong> que vous devriez essayer le bouton F5.
        </p>
        <div className="tillTheEnd"></div>
        <ProjectTimeline />
      </Container>
    </Container>
  );
}

export default Projects;
