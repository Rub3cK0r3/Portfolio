import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
 <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
      <DiJavascript1 />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://es.wikipedia.org/wiki/Python" target="_blank" rel="noopener noreferrer">
      <DiPython />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://en.wikipedia.org/wiki/React_(software)" target="_blank" rel="noopener noreferrer">
      <DiReact />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noopener noreferrer">
      <DiGit />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://en.wikipedia.org/wiki/PostgreSQL" target="_blank" rel="noopener noreferrer">
      <SiPostgresql />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://en.wikipedia.org/wiki/Java" target="_blank" rel="noopener noreferrer">
      <DiJava />
    </a>
  </Col>
</Row>
  );
}

export default Techstack;
