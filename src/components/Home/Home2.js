import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate about <b className="purple"> Competitive Programming and AI-driven solutions</b>.
              <br />
              <br />
              Proficient in <i><b className="purple"> C++, Java, JavaScript, and Python</b></i>, 
              specializing in algorithms and scalable applications.
              <br />
              <br />
              Experienced in <b className="purple"> Machine Learning and Deep Learning</b>, using 
              <i><b className="purple"> PyTorch and TensorFlow</b></i> to build predictive models.
              <br />
              <br />
              My projects include:
              <ul>
                <li><b className="purple">Crop Recommendation System:</b> Predictive model for agricultural optimization.</li>
                <li><b className="purple">Buzzer Chat Application:</b> Secure, real-time encrypted chat system.</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>Excited to collaborate and build something great together!</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kushu-Shukla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/kushu-shukla-50743a261/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
