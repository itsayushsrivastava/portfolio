import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/KushuShukla_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaBriefcase /> Professional Experiences</h3>
            <Resumecontent
              title="Training - Data Structures and Algorithms [Geeks for Geeks]"
              date="Jun 2023 - Jul 2023"
              content={[
                "Mastered advanced algorithmic techniques and optimized data structures for computational efficiency.",
                "Applied dynamic programming and recursion strategies to solve high-complexity problems.",
                "Enhanced execution time and resource management through optimized search and sorting algorithms.",
              ]}
            />
            <h3 className="resume-title"><FaTrophy /> Achievements</h3>
            <Resumecontent
              title="Competitive Programming Rankings"
              date="Feb 2024 - Jan 2025"
              content={[
                "Top 60.56% on Leetcode with a max rating of 1861.",
                "Silver badge in C++ and Python on CodeChef.",
                "Solved over 1000 DSA/CP problems on platforms like GFG, Codeforces, and Leetcode.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaGraduationCap /> Education</h3>
            <Resumecontent
              title="B.Tech Computer Science and Engineering [Lovely Professional University]"
              date="2022 - 2026"
              content={[
                "CGPA: 6.5",
                "Developed expertise in Competitive Programming, Machine Learning, and Deep Learning.",
              ]}
            />
            <h3 className="resume-title"><FaTrophy /> Projects</h3>
            <Resumecontent
              title="Crop Recommendation System"
              date="Jun 2024 - Jul 2024"
              content={[
                "Designed a machine learning-based crop recommendation system optimizing agricultural yield.",
                "Implemented predictive analysis techniques to help farmers make informed decisions.",
              ]}
            />
            <Resumecontent
              title="Buzzer - A Chatting Application"
              date="Mar 2024 - Apr 2024"
              content={[
                "Developed a real-time multi-client chat application ensuring secure messaging with AES encryption.",
                "Optimized performance through socket programming and multithreading.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
