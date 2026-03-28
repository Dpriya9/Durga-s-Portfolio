import { Card } from "react-bootstrap";

const Education = () => {
  const cardStyle1 = {
    background:
      "linear-gradient(135deg, rgba(13, 110, 253, 0.2) 0%, rgba(0, 123, 255, 0.1) 100%)",
    border: "1px solid rgba(13, 110, 253, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "24px",
  };

  const cardStyle2 = {
    background:
      "linear-gradient(135deg, rgba(40, 167, 69, 0.2) 0%, rgba(25, 135, 84, 0.1) 100%)",
    border: "1px solid rgba(40, 167, 69, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "24px",
  };

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fadeInUp">
          Work Experience
        </h2>

        {/* Work Experience Item 1 */}
        <div className="mb-5" data-aos="fadeInUp" data-aos-delay="100">
          <Card style={cardStyle1} className="border-0">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#0d6efd",
                    marginRight: "12px",
                  }}
                ></div>
                <h5 className="mb-0">Support Engineer</h5>
              </div>
              <p className="text-muted mb-3 small">
                TATA Consultancy Service (TCS) | Jan 2025 - Present
              </p>
              <p>
                Worked on real-time project simulations involving web
                development, AI/ML, and robotics; handled UI development, basic
                troubleshooting, debugging, and API testing using Postman.
              </p>
            </Card.Body>
          </Card>
        </div>

        {/* Work Experience Item 2 */}
        <div className="mb-5" data-aos="fadeInUp" data-aos-delay="300">
          <Card style={cardStyle2} className="border-0">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#28a745",
                    marginRight: "12px",
                  }}
                ></div>
                <h5 className="mb-0">MERN Development Intern</h5>
              </div>
              <p className="text-muted mb-3 small">
                Luminar Technolab, Kochi | May 2024 - Nov 2024
              </p>
              <p>
                Completed a MERN stack internship, developing full-stack web
                applications using MongoDB, Express.js, React, and Node.js, with
                hands-on experience in building REST APIs, UI development, and
                debugging.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
