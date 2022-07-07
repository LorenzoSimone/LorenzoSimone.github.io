import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Particle from "../Particle";
import PaperCard from "./PaperCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={24}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Recent <strong className="pisacolor">Publications</strong>
            </h1>
            <PaperCard title={"Novel Biased Normalized Cuts Approach for the Automatic Segmentation of the Conjunctiva"}
             year = {2020} link={"https://www.mdpi.com/2079-9292/9/6/997/htm"} journal = {"Electronics"} authors = {<>Giovanni Dimauro and <strong className="pisacolor">Lorenzo Simone</strong></>}/>

             <PaperCard title={"A Novel Approach for Biofilm Detection Based on a Convolutional Neural Network"}
             year = {2020} link={"https://www.mdpi.com/2079-9292/9/6/881/pdf?version=1590976961"} journal = {"Electronics"} authors = {<>Dimauro, Giovanni, Deperte, Francesca, Maglietta, Rosalia, Bove, Mario, Gioia, Fabio La, Renò, Vito, <strong className="pisacolor">Lorenzo Simone</strong> and Gelardi, Matteo</>}/>

             <PaperCard title={"Semantic Segmentation of Conjunctiva Region for Non-Invasive Anemia Detection Applications"}
             year = {2020} link={"https://www.mdpi.com/2079-9292/9/8/1309/pdf"} journal = {"Electronics"} authors = {<>Kasiviswanathan, Sivachandar, Vijayan, Thulasi Bai, <strong className="pisacolor">Lorenzo Simone</strong> and Dimauro, Giovanni</>}/>

             <PaperCard title={"A Smartphone-Based Cell Segmentation to Support Nasal Cytology"}
             year = {2020} link={"https://www.mdpi.com/2076-3417/10/13/4567/pdf"} journal = {"Appl. Sciences"} authors = {<>Dimauro, Giovanni, Pierro, Davide Di, Deperte, Francesca, <strong className="pisacolor">Lorenzo Simone</strong> and Fina, Pio Raffaele</>}/>
             
          </Col>
        </Row>   
      </Container>
    </Container>
  );
}

export default About;
