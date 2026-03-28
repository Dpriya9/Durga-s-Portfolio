import "../styles.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

const Intro = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Web Developer",
        "React Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="intro"
      className="section d-flex align-items-center justify-content-center text-center position-relative"
      style={{ minHeight: "100vh" }}
    >
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

      <div className="container">
        {/* Profile Image Placeholder */}
        <div
          className="profile-container mb-4"
          data-aos="zoomIn"
          data-aos-duration="800"
        >
          <div className="profile-image">
            <div className="profile-glow"></div>
            <div className="profile-avatar">
              <span className="avatar-text">👩‍💻</span>
            </div>
          </div>
        </div>

        <h1
          className="display-4 fw-bold text-light mb-3"
          data-aos="fadeInUp"
          data-aos-duration="1000"
        >
          Hi, <span className="head1">I'm Durgapriya</span>
        </h1>

        <p
          className="tagline text-light opacity-75 mb-4"
          data-aos="fadeInUp"
          data-aos-delay="100"
        >
          Crafting Digital Experiences with Code
        </p>

        <p
          className="lead text-light mb-4"
          data-aos="fadeInUp"
          data-aos-delay="200"
        >
          <span ref={typedRef}></span>
        </p>

        {/* Action Buttons */}
        <div
          className="button-group mb-5"
          data-aos="fadeInUp"
          data-aos-delay="300"
        >
          <button
            className="btn btn-primary me-3 px-4 py-2"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FaEnvelope className="me-2" />
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
