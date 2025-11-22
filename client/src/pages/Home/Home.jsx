import React from "react";
import "./home.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faJs,
  faNodeJs,
  faReact,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Para MySQL, si no hay un icono de marca
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
library.add(faJs, faNodeJs, faReact, faCss3Alt, faGitAlt, faGithub, faDatabase);
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="section1 bg-dark pt-5">
        <Container>
          <Row>
            <Col lg={3}>
              <img
                src="../images/yo.jpg"
                alt=""
                width={200}
                className="boder rounded-4"
              />
            </Col>
            <Col lg={6} className="text-white mt-5">
              <p>
                ¡Hola! Soy Alberto Céspedes Sáiz, Desarrollador Web Full-Stack.
                Mi stack principal se centra en el ecosistema JavaScript, con
                una sólida experiencia en React para el desarrollo frontend y
                Node.js para construir soluciones backend escalables. Soy una
                persona muy responsable y orientada a la solución de problemas,
                con un gran entusiasmo por el aprendizaje continuo y los nuevos
                desafíos tecnológicos. Estoy listo para aplicar mis habilidades
                en proyectos innovadores.
              </p>
            </Col>
            <Col lg={3} className="pe-5">
              <h3>Skills</h3>
              <div className="skills-grid d-flex flex-wrap justify-content-end w-100">
                <p className="skill-item">
                  <FontAwesomeIcon icon={faHtml5} className="me-2" />
                  HTML
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faJs} className="me-2" />
                  JavaScript
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faNodeJs} className="me-2" />
                  Node.js
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faReact} className="me-2" />
                  React
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="me-2" />
                  MySQL
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faCss3Alt} className="me-2" />
                  CSS
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faGitAlt} className="me-2" />
                  Git
                </p>
                <p className="skill-item">
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section2 bg-dark">
        <Container>
          <h2>Projects</h2>
          <Row>
            <Col lg={3}>
              <Card className="card m-5" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/lasimu.png" />
                <Card.Body>
                  <Card.Title>La Simulación</Card.Title>
                  <Card.Text>
                    Proyecto de final de boocamp juntos mis compañeros
                  </Card.Text>
                  <Button variant="primary">Entrar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="card m-5" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/pelus.png" />
                <Card.Body>
                  <Card.Title>Proyecto Peluqueria</Card.Title>
                  <Card.Text>
                    Proyecto de pagina para la venta de paginas online de
                    peluquerias
                  </Card.Text>
                  <Button variant="primary">Entrar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="card m-5" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/apar.png" height={105} />
                <Card.Body>
                  <Card.Title>Proyecto Apartamentos</Card.Title>
                  <Card.Text>
                    Proyecto de una pagina de reserva de apartamentos
                  </Card.Text>
                  <Button
                    variant="primary"
                    as="a"
                    href="https://albertocespedes85.github.io/LosCisnes/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <h3>Contact</h3>
              <div className="contact-info text-end w-100">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <a href="mailto:tu.email@example.com" className="text-white">
                    tu.email@example.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />
                  <a
                    href="https://www.linkedin.com/in/tuperfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  <a
                    href="https://github.com/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    GitHub
                  </a>
                </p>
                <p>
                  <Button
                    variant="outline-light"
                    size="sm"
                    href="/ruta/a/tu/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar CV
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
