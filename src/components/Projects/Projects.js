import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import CropRecommendation from "../../Assets/Projects/crop-recommendation.png";
import BuzzerChat from "../../Assets/Projects/buzzer-chat.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CropRecommendation}
              isBlog={false}
              title="Crop Recommendation System"
              description="Developed a data-driven crop recommendation system optimizing crop selection based on environmental conditions and soil data using machine learning models."
              link="https://github.com/Kushu-Shukla/Crop-Recommendation-System"
              liveLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BuzzerChat}
              isBlog={false}
              title="Buzzer - A Chatting Application"
              description="Built a real-time chat application with multi-client support, secure messaging using AES encryption, and optimized system performance with multithreading."
              link="https://github.com/Kushu-Shukla/Chatting-Application"
              liveLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
