import React from "react";
import { Container, Row, Col, Card, Button, ButtonGroup,ListGroup } from "react-bootstrap";
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
                  <ListGroup>
                                      <ListGroup.Item>•	Over 2 years of experience designing, developing, and testing web and software applications and REST APIs</ListGroup.Item>
                                      <ListGroup.Item>
                                        •	Proficient in Java, C#, SQL, and JavaScript and technologies such as .NET, ASP.NET Core, Angular, and React
                                      </ListGroup.Item><ListGroup.Item>
                                        •	Experienced in cloud platforms like Microsoft Azure for APIs, databases, and orchestration
                                      </ListGroup.Item><ListGroup.Item>
                                        •	Solid understanding of software design patterns, architectural best practices, and performance optimization techniques
                                      </ListGroup.Item><ListGroup.Item>
                                        •	Effective verbal and written communication skills for working in Agile software development environments, and collaborating with cross-functional teams
                                      </ListGroup.Item>
                  </ListGroup>

                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="primary" href={githubUrl} target="_blank">
                    GitHub
                  </Button>

                  <Button variant="info" href={linkedinUrl} target="_blank">
                    LinkedIn
                  </Button>
                  <Button variant="success" href={Resume} download="Jamaal Bernabe - Resume.pdf" target="_blank">
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
