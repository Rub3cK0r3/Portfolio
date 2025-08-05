import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { Link } from 'react-scroll';


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* Tu logo o nombre si quieres */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Services
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Nav.Item className="fork-btn">
          <Button
            href="https://github.com/Rub3cK0r3/Portfolio"
            target="_blank"
            className="fork-btn-inner"
          >
            <CgGitFork style={{ fontSize: "1.3em", verticalAlign: "middle" }} />{" "}
            <AiFillStar style={{ fontSize: "1.1em", verticalAlign: "middle" }} />
          </Button>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavBar;
