import React from "react";
import { FaLaptopCode, FaServer, FaCode } from "react-icons/fa";

function Services() {
  return (
    <section className="about-section" id="services">
      <div className="container text-center">
        <h2 className="heading-name purple" style={{ marginBottom: "2rem" }}>
          What I <span className="purple">Offer</span>
        </h2>

        <p
          className="home-about-body"
          style={{ maxWidth: "650px", margin: "0 auto 3rem" }}
        >
          I provide a wide range of services tailored to your needs. My goal is
          to deliver high-quality solutions that help your business grow with
          modern technologies.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div
            className="tech-icons"
            title="FullStack Development"
            style={{
              flex: "1 1 360px",
              maxWidth: "360px",
              minHeight: "280px",
              padding: "20px",
            }}
          >
            <FaLaptopCode style={{ fontSize: "3.5rem" }} />
            <h5
              style={{ marginTop: "10px", fontWeight: "600", color: "#cd5ff8" }}
            >
              FullStack Dev
            </h5>
            <p
              style={{
                fontSize: "1rem",
                marginTop: "8px",
                color: "#e7d0f4",
                lineHeight: "1.5",
              }}
            >
              Complete web apps using{" "}
              <span className="purple">React</span> and{" "}
              <span className="purple">Django</span>
            </p>
          </div>

          <div
            className="tech-icons"
            title="Backend Development"
            style={{
              flex: "1 1 360px",
              maxWidth: "360px",
              minHeight: "280px",
              padding: "20px",
            }}
          >
            <FaServer style={{ fontSize: "3.5rem" }} />
            <h5
              style={{ marginTop: "10px", fontWeight: "600", color: "#cd5ff8" }}
            >
              Backend Dev
            </h5>
            <p
              style={{
                fontSize: "1rem",
                marginTop: "8px",
                color: "#e7d0f4",
                lineHeight: "1.5",
              }}
            >
              Server-side logic with{" "}
              <span className="purple">Django</span>
            </p>
          </div>

          <div
            className="tech-icons"
            title="Frontend Development"
            style={{
              flex: "1 1 360px",
              maxWidth: "360px",
              minHeight: "280px",
              padding: "20px",
            }}
          >
            <FaCode style={{ fontSize: "3.5rem" }} />
            <h5
              style={{ marginTop: "10px", fontWeight: "600", color: "#cd5ff8" }}
            >
              Frontend Dev
            </h5>
            <p
              style={{
                fontSize: "1rem",
                marginTop: "8px",
                color: "#e7d0f4",
                lineHeight: "1.5",
              }}
            >
              Interfaces using <p className="purple">React</p>
            </p>
          </div>
        </div>

        {/* Sección Contactame */}
        <div style={{ marginTop: "3rem" }}>
          <a
            href="mailto:rubenmartinezagramunt@gmail.com"
            className="btn purple-btn"
            style={{
              padding: "12px 28px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "25px",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#cd5ff8",
              transition: "background-color 0.3s ease",
              display: "inline-block",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a13fcc")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5ff8")}
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
