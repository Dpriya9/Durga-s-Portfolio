import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <Navbar />
      <Intro />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      {/* Modern Footer */}
      <footer
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.9) 100%)",
          color: "white",
        }}
      >
        <div className="container text-center">
          <h5
            className="mb-3"
            style={{
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build Something Amazing Together!
          </h5>
          <p className="mb-4 opacity-75">
            Passionate about creating innovative web solutions
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <a href="#contact" className="btn btn-outline-light btn-sm">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline-light btn-sm">
              View My Work
            </a>
          </div>
          <hr className="my-4 opacity-25" />
          <p className="mb-0 opacity-50 small">
            © 2024 Durgapriya.All rights reserved. Crafted with using React.js,Bootstrap & typed.js
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
