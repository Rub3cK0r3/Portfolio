import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rubén Martínez Agramunt </span>
            from <span className="purple">Murcia, Spain.</span>
            <br />
            I am currently employed as a software developer at Spain.
            <br />
            I'm a hardworking IT worker
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">rub3cK0r3</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
