import { Container, Row, Col, Card, Button, CardGroup, Accordion, ButtonGroup } from "react-bootstrap";

import "../App.css";

function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center bg-dark text-light" cardStyle>
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Projects</h1>
              </Card.Title>
              <Card.Text className="text-center">
                <CardGroup>
                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a href="https://github.com/jnbernabe/NaviGrade" target="_blank" rel="noopener noreferrer" className="text-dark">
                        <b>
                          <h1>NaviGrade </h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Title>Task and Course Management System</Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>JavaScript</b> | <b>React</b> | <b>Node.js</b> | <b>MongoDB</b>
                        <p> A full-stack web application that allows users to create and manage their own courses and assignments, as well as view their grades and predict their final grade.</p>
                        <Button href="https://navigrade-ee7efdf3e932.herokuapp.com/" target="_blank" rel="noopener noreferrer" variant="dark">
                          Visit NaviGrade on Heroku
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a href="https://github.com/jnbernabe/nlp-group1-amzFashion" target="_blank" rel="noopener noreferrer" className="text-dark">
                        <b>
                          <h1>Amazon Fashion NLP</h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>Python</b> | <b>TensorFlow</b> | <b>Scikit-learn</b>
                        <p> A natural language processing project that analyzes Amazon fashion reviews to predict the sentiment of the review and classify the review's rating.</p>
                      </Card.Text>
                    </Card.Body>
                  </Card> */}
                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a href="https://github.com/jnbernabe/spotify-to-youtube" target="_blank" rel="noopener noreferrer" className="text-dark">
                        <b>
                          <h1>STMV </h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Title>Playlist to Music Video Generator</Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>TypeScript</b> | <b>React</b> | <b>Express.js</b> | <b>Node.js</b> | <b>Spotify API</b> | <b>Youtube API</b>
                        <p>
                          {" "}
                          STMV is a web application that allows users to generate youtube playlists of music videos from their Spotify playlists. The app uses the Spotify API to get the user's
                          playlists and the Youtube API to generate the music videos. The app uses React to build the UI and Express.js to build the backend. The app is deployed on Netlify.
                        </p>
                        <ButtonGroup>
                          <Button href="https://stmv.netlify.app/" target="_blank" rel="noopener noreferrer" variant="dark">
                            Visit STMV on Netlify
                          </Button>
                          <Button href="https://www.youtube.com/watch?v=2f_WMaRrwEo" target="_blank" rel="noopener noreferrer" variant="success">
                            YouTube Demo
                          </Button>
                        </ButtonGroup>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a href="https://github.com/jnbernabe/AWS-Translate-polly" target="_blank" rel="noopener noreferrer" className="text-dark">
                        <b>
                          <h1>Image Translator</h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Title>AWS Image Translator</Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>Python</b> | <b>AWS Translate</b> | <b>AWS Polly</b>
                        <p>
                          {" "}
                          A natural language processing project that uses AWS Translate to translate text in an image from one language to another and uses AWS Polly to convert the translated text to
                          speech.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
