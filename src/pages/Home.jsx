import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Resume from "../assets/Jamaal Bernabe - Resume.pdf";

import "../App.css";
const githubUrl = import.meta.env.VITE_GITHUB_URL;
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="text-center bg-dark text-light">
              <Card.Img
                variant="top"
                className="text-center"
                src="https://github.com/jnbernabe.png"
                style={{
                  width: "15rem",
                  height: "15rem",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                alt="Jamaal Bernabe"
                loading="lazy"
              ></Card.Img>
              <Card.Body className="text-center">
                <Card.Title className="text-center">
                  <h1 className="text-center">Jamaal Bernabe</h1>
                  <h2 className="text-center">Software Developer</h2>
                </Card.Title>

                <Card.Text className="text-center mx-lg-5">
                  Software Developer with 3+ years of experience building
                  scalable, high-performance applications in Python, Java, and
                  Node.js. Proven expertise in designing RESTful APIs,
                  optimizing database performance, and deploying cloud-based
                  solutions on AWS and Azure. Adept at driving automation,
                  implementing CI/CD pipelines, and leveraging AI-powered
                  analytics to enhance system efficiency.
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="primary" href={githubUrl} target="_blank">
                    GitHub
                  </Button>

                  <Button variant="info" href={linkedinUrl} target="_blank">
                    LinkedIn
                  </Button>
                  <Button
                    variant="success"
                    href={Resume}
                    download="Jamaal Bernabe - Resume.pdf"
                    target="_blank"
                  >
                    Resume
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
