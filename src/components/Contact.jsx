import { Card } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactCardStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "25px",
    padding: "50px",
    boxShadow:
      "0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    position: "relative",
    overflow: "hidden",
  };

  const iconStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.8) 0%, rgba(78, 205, 196, 0.8) 100%)",
    boxShadow: "0 15px 35px rgba(255, 107, 107, 0.4)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    flexShrink: 0,
    color: "white",
  };

  const contactItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "30px",
    borderRadius: "15px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "translateY(-15px) scale(1.05)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
  };

  const handleHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  const handleIconHover = (e) => {
    e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 107, 107, 0.6)";
  };

  const handleIconHoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(255, 107, 107, 0.4)";
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fadeInUp">
          Get In Touch
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fadeInUp" data-aos-delay="100">
            <Card style={contactCardStyle} className="border-0">
              <Card.Body>
                <div className="row">
                  {/* Email */}
                  <div className="col-md-4">
                    <div
                      data-aos="zoomIn"
                      data-aos-delay="100"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverOut}
                      style={contactItemStyle}
                    >
                      <div
                        style={{
                          ...iconStyle,
                          background:
                            "linear-gradient(135deg, rgba(220, 53, 69, 0.8) 0%, rgba(255, 71, 87, 0.6) 100%)",
                        }}
                        onMouseEnter={handleIconHover}
                        onMouseLeave={handleIconHoverOut}
                      >
                        <MdEmail style={{ color: "#fff" }} />
                      </div>
                      <div>
                        <h5 className="mb-2" style={{ color: "white" }}>
                          Email
                        </h5>
                        <a
                          href="mailto:asdurgapriya@gmail.com"
                          style={{
                            color: "#ff6b6b",
                            textDecoration: "none",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#ff8a8a";
                            e.target.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#ff6b6b";
                            e.target.style.transform = "scale(1)";
                          }}
                        >
                          asdurgapriya@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="col-md-4">
                    <div
                      data-aos="zoomIn"
                      data-aos-delay="200"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverOut}
                      style={contactItemStyle}
                    >
                      <div
                        style={{
                          ...iconStyle,
                          background:
                            "linear-gradient(135deg, rgba(0, 119, 181, 0.8) 0%, rgba(0, 162, 219, 0.6) 100%)",
                        }}
                        onMouseEnter={handleIconHover}
                        onMouseLeave={handleIconHoverOut}
                      >
                        <FaLinkedin style={{ color: "#fff" }} />
                      </div>
                      <div>
                        <h5 className="mb-2" style={{ color: "white" }}>
                          LinkedIn
                        </h5>
                        <a
                          href="https://www.linkedin.com/in/durgapriya-a-s-55a44a2b7/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#4ecdc4",
                            textDecoration: "none",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#6dd5cf";
                            e.target.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#4ecdc4";
                            e.target.style.transform = "scale(1)";
                          }}
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="col-md-4">
                    <div
                      data-aos="zoomIn"
                      data-aos-delay="300"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverOut}
                      style={contactItemStyle}
                    >
                      <div
                        style={{
                          ...iconStyle,
                          background:
                            "linear-gradient(135deg, rgba(51, 51, 51, 0.8) 0%, rgba(102, 102, 102, 0.6) 100%)",
                        }}
                        onMouseEnter={handleIconHover}
                        onMouseLeave={handleIconHoverOut}
                      >
                        <FaGithub style={{ color: "#fff" }} />
                      </div>
                      <div>
                        <h5 className="mb-2" style={{ color: "white" }}>
                          GitHub
                        </h5>
                        <a
                          href="https://github.com/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#ffd93d",
                            textDecoration: "none",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#ffe066";
                            e.target.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#ffd93d";
                            e.target.style.transform = "scale(1)";
                          }}
                        >
                          View Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-5"
          data-aos="fadeInUp"
          data-aos-delay="400"
        >
          <p className="text-muted mb-3">
            Feel free to reach out! I'm always open to discussing new projects,
            creative ideas, or opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
