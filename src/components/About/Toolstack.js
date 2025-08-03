import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" target="_blank" rel="noopener noreferrer">
            <SiVisualstudiocode />
          </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://es.wikipedia.org/wiki/GNU/Linux" target="_blank" rel="noopener noreferrer">
          <SiLinux />
        </a>

      </Col>
    </Row>
  );
}

export default Toolstack;
