import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  FaLinkedin,
  FaResearchgate,
  FaGoogle,
  FaMailBulk
} from "react-icons/fa";
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
            I received a <b className="purple">MSc Degree</b> in <b className="purple">Artificial Intelligence</b> 
            {' '}(cum laude) from the <a href="https://www.unipi.it/"><b className="purple">University of Pisa</b></a>, supervised by <a href="http://pages.di.unipi.it/bacciu//"><b className="purple">Prof. Davide Bacciu</b></a> with a thesis on a novel self-supervised generative adversarial framework ECGAN for electrocardiography.
            <br /><br /> I am currently a <b className="purple">Reserch Fellow</b> at the <a href="https://www.unipi.it/"><b className="purple">University of Pisa</b></a> applying <b className="purple">NLP</b> to health-related tasks.
            <br /><br />My research interests include <b className="purple">deep generative models</b> exploiting <b className="purple">compressed</b> and <b className="purple">sparse representations</b> for sequential and structured data, as well as <b className="purple">neural networks</b> and <b className="purple">reservoir computing</b>.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar home-about-description">
            <Tilt>
              <a href="https://di.unipi.it/persone/"><img src={myImg} href="ciao" className="img-fluid" alt="avatar" /></a>
            </Tilt>
            <p className="home-about-body">🏠 Office <b className="purple">382B</b> ☎️ +050 2213147 
            <br />📍 Largo Bruno Pontecorvo, 3 56127 <b className="purple">Pisa PI</b>
            </p>  
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=k78dT3AAAAAJ&hl=it"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMailBulk/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=k78dT3AAAAAJ&hl=it"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.researchgate.net/profile/Lorenzo-Simone"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaResearchgate />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lorenzo-simone/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  < FaLinkedin/>
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
