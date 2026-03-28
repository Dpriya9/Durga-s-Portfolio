import "../styles.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section position-relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        borderRadius: "30px",
        margin: "40px",
        padding: "60px",
        boxShadow:
          "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2
              className="mb-4"
              data-aos="fadeInLeft"
              style={{
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              About Me
            </h2>
          </div>
          <div className="col-md-6">
            <h2
              className="mb-4"
              data-aos="fadeInRight"
              data-aos-delay="100"
              style={{
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Skills
            </h2>
          </div>
        </div>

        <div className="row align-items-start">
          {/* Left Side - About Me */}
          <div className="col-md-6" data-aos="fadeInLeft">
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.1em",
                lineHeight: "1.6",
              }}
            >
              I am Durgapriya, a passionate Full Stack Developer with a strong
              interest in building modern web applications. I enjoy working with
              technologies like React, Node.js, and MongoDB to create efficient
              and user-friendly applications.
            </p>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.1em",
                lineHeight: "1.6",
              }}
            >
              I have completed my Full Stack Development training and I am
              eager to contribute to innovative projects and grow as a
              developer.
            </p>
          </div>

          {/* Right Side - Skills */}
          <div className="col-md-6" data-aos="fadeInRight" data-aos-delay="100">
            <div className="skill-item mb-4">
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                HTML
              </p>
              <div
                className="progress"
                data-aos="slideInUp"
                data-aos-delay="0"
                style={{
                  height: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated d-flex align-items-center justify-content-center"
                  style={{
                    width: "85%",
                    background: "linear-gradient(90deg, #ff6b6b, #4ecdc4)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  85%
                </div>
              </div>
            </div>

            <div className="skill-item mb-4">
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                CSS
              </p>
              <div
                className="progress"
                data-aos="slideInUp"
                data-aos-delay="100"
                style={{
                  height: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated d-flex align-items-center justify-content-center"
                  style={{
                    width: "80%",
                    background: "linear-gradient(90deg, #4ecdc4, #ffd93d)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="skill-item mb-4">
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                JavaScript
              </p>
              <div
                className="progress"
                data-aos="slideInUp"
                data-aos-delay="200"
                style={{
                  height: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated d-flex align-items-center justify-content-center"
                  style={{
                    width: "80%",
                    background: "linear-gradient(90deg, #ffd93d, #ff6b6b)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="skill-item mb-4">
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Node.js
              </p>
              <div
                className="progress"
                data-aos="slideInUp"
                data-aos-delay="300"
                style={{
                  height: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated d-flex align-items-center justify-content-center"
                  style={{
                    width: "80%",
                    background: "linear-gradient(90deg, #4ecdc4, #667eea)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="skill-item mb-4">
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                MongoDB
              </p>
              <div
                className="progress"
                data-aos="slideInUp"
                data-aos-delay="400"
                style={{
                  height: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated d-flex align-items-center justify-content-center"
                  style={{
                    width: "80%",
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
