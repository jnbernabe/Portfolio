import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const githubUrl = import.meta.env.VITE_GITHUB_URL;

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center bg-dark text-light">
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Contact</h1>
              </Card.Title>
              <Card.Text className="text-center">
                GitHub:{" "}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  @JNBernabe
                </a>
                <br />
                <p>
                  Email:{" "}
                  <a href="mailto:jnbernabe@gmail.com">JNBernabe@gmail.com</a>
                  <br />
                  Phone: (647) 402-1724
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
