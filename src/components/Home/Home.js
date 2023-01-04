import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import SocialFollow from "../Footer";
 

import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There! 👋🏻
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Sai Charan</strong>
                <div style={{fontSize: '20px'}} >
                <Type />

              </div>
              </h1>


            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <SocialFollow />
    </section>
  );
}

export default Home;
