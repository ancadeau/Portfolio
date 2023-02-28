import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation en école préparatoire 
              pour des écoles d'ingénieurs.
              Depuis, je fais plein de petits projets (plus ou moins simples).
              <br />
              <br />Je suis compétent dans les langages de programmation classiques, 
              comme le
              <i>
                <b className="purple"> C, <br /> le C++ ou bien le Python. </b>
              </i>
              <br />
              <br />
              Je suis intéréssé par tous les domaines des {" "}
              <b className="purple">Nouvelles Technologies</b>
              , que ce soit {" "}
              <b className="purple">
              la cybersécrité, l'IA, le développement de jeux vidéos
              </b>
              , et bien plus !
              <br />
              <br />
              Quand j'en ai la possibilité et la disponibilité, je me laisse aller à <b className="purple">mes passion</b>, 
              <br />qui sont la <b className="purple">musique</b>, le <b className="purple">sport (rugby et tennis)</b> et les <b className="purple">jeux vidéos</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">rentrer en contact </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ancadeau"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/antoinecadeau/"
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
