import React, { useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext"; // Import FormContext

const Dashboard = () => {
  const { formData, setFormData } = useContext(FormContext); // Access form state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/surgery");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff9966, #ff5e62)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="p-4 shadow-lg rounded-4 w-100" style={{ maxWidth: "900px", border: "none", backgroundColor: "#ffffffd9" }}>
          <Card.Body>
            <h2 className="text-center text-dark mb-4 fw-bold">Patient Registration</h2>
            <Form onSubmit={handleNext}>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Title</Form.Label>
                    <Form.Select name="title" value={formData.title || ""} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Master">Master</option>
                      <option value="Selvan">Selvan</option>
                      <option value="Selvi">Selvi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Patient Name</Form.Label>
                    <Form.Control type="text" name="patientName" placeholder="Enter Patient Name" value={formData.patientName || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Age</Form.Label>
                    <Form.Control type="text" name="age" placeholder="Enter Age" value={formData.age || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Gender</Form.Label>
                    <div>
                      <Form.Check inline label="Male" name="gender" type="radio" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                      <Form.Check inline label="Female" name="gender" type="radio" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                      <Form.Check inline label="Other" name="gender" type="radio" value="Other" checked={formData.gender === "Other"} onChange={handleChange} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Attender Name</Form.Label>
                    <Form.Control type="text" name="attenderName" placeholder="Enter Attender Name" value={formData.attenderName || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Attender Mobile</Form.Label>
                    <Form.Control type="text" name="attenderMobile" placeholder="Enter Attender Mobile" value={formData.attenderMobile || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Address 1</Form.Label>
                    <Form.Control type="text" name="address1" placeholder="Enter Address 1" value={formData.address1 || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">District</Form.Label>
                    <Form.Control type="text" name="district" placeholder="Enter District" value={formData.district || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" value={formData.email || ""} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Own Glasses</Form.Label>
                    <div>
                      <Form.Check inline label="Yes" name="ownGlasses" type="radio" value="Yes" checked={formData.ownGlasses === "Yes"} onChange={handleChange} />
                      <Form.Check inline label="No" name="ownGlasses" type="radio" value="No" checked={formData.ownGlasses === "No"} onChange={handleChange} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Visual Right</Form.Label>
                    <Form.Select name="visualRight" value={formData.visualRight || ""} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="6/6">6/6</option>
                      <option value="6/9">6/9</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-dark">Visual Left</Form.Label>
                    <Form.Select name="visualLeft" value={formData.visualLeft || ""} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="6/6">6/6</option>
                      <option value="6/9">6/9</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" className="mt-3 w-100 btn-danger rounded-3 p-2 fw-semibold shadow-sm">
                Next
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard;
