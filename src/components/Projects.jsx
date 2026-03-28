import { Card } from "react-bootstrap";

const Projects = () => {
  const cardStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow:
      "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    color: "white",
    fontWeight: "600",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "8px 16px",
    margin: "6px 6px 6px 0",
    background:
      "linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%)",
    border: "1px solid rgba(255, 107, 107, 0.3)",
    borderRadius: "25px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#ff6b6b",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="zoom-in">
          Projects
        </h2>

        <div className="row g-4">
          {/* project 1 */}
          <div
            className="col-md-4 d-flex"
            data-aos="fadeInUp"
            data-aos-delay="0"
          >
            <Card className="project-card w-100" style={cardStyle}>
              <Card.Header style={headerStyle}>Conceptual Project</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Smart Robotics Web Interface</Card.Title>
                <Card.Text className="flex-grow-1">
                  Designed a user-friendly web interface for a conceptual
                  AI-powered robotics project during Ignite training, focusing
                  on user interaction and system visualization.
                </Card.Text>
                <div className="mt-auto">
                  <span style={tagStyle}>React.js</span>
                  <span style={tagStyle}>JavaScript</span>
                  <span style={tagStyle}>Responsive</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* project 2 */}
          <div
            className="col-md-4 d-flex"
            data-aos="fadeInUp"
            data-aos-delay="200"
          >
            <Card className="project-card w-100" style={cardStyle}>
              <Card.Header style={headerStyle}>React Project</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Quiz App</Card.Title>
                <Card.Text className="flex-grow-1">
                  Voice controlled quiz app built using React.
                </Card.Text>
                <div className="mt-auto">
                  <span style={tagStyle}>React.js</span>
                  <span style={tagStyle}>Javascript</span>
                  <span style={tagStyle}>UI Design</span>
                  <span style={tagStyle}>RESTful APIs</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* project 3 */}
          <div
            className="col-md-4 d-flex"
            data-aos="fadeInUp"
            data-aos-delay="400"
          >
            <Card className="project-card w-100" style={cardStyle}>
              <Card.Header style={headerStyle}>MERN Stack</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Event Management</Card.Title>
                <Card.Text className="flex-grow-1">
                  Event booking platform using MERN stack.
                </Card.Text>
                <div className="mt-auto">
                  <span style={tagStyle}>MongoDB</span>
                  <span style={tagStyle}>Express</span>
                  <span style={tagStyle}>React.js</span>
                  <span style={tagStyle}>Node.js</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
