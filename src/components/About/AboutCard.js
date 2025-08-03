import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rubén Martínez Agramunt</span> from
            <span className="purple"> Murcia, Spain.</span>
            <br />
            I am currently employed as a software developer in Spain.
            <br />
            I'm a hardworking IT professional with a passion for technology and innovation.
            <br />
            I specialize in <span className="purple">web development</span> and have solid experience building
            scalable and modern applications using <span className="purple">Python</span> and <span className="purple">JavaScript</span>.
            <br />
            My main focus is writing clean, maintainable code and delivering meaningful digital solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
