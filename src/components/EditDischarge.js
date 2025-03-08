import React, { useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext"; // Import FormContext

const EditDischarge = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    navigate("/next-page"); // Update the path as needed
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff9966, #ff5e62)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center">
        <Card
          className="p-4 shadow-lg rounded-4 w-100"
          style={{
            maxWidth: "900px",
            border: "none",
            backgroundColor: "#ffffffd9",
          }}
        >
          <Card.Body>
            <h2 className="text-center text-danger mb-4 fw-bold">Edit Discharge</h2>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Date of Discharge</Form.Label>
                    <Form.Control
                      type="date"
                      name="dateOfDischarge"
                      value={formData?.dateOfDischarge || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Vision In Right Eye</Form.Label>
                    <Form.Control
                      type="text"
                      name="visionRightEye"
                      value={formData?.visionRightEye || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Vision In Left Eye</Form.Label>
                    <Form.Control
                      type="text"
                      name="visionLeftEye"
                      value={formData?.visionLeftEye || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Final Diagnosis</Form.Label>
                    <Form.Control
                      type="text"
                      name="finalDiagnosis"
                      value={formData?.finalDiagnosis || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Medication</Form.Label>
                    <Form.Control
                      type="text"
                      name="medication"
                      value={formData?.medication || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Others</Form.Label>
                    <Form.Control
                      type="text"
                      name="others"
                      value={formData?.others || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">1st Visit</Form.Label>
                    <Form.Control
                      type="date"
                      name="firstVisit"
                      value={formData?.firstVisit || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">2nd Visit</Form.Label>
                    <Form.Control
                      type="date"
                      name="secondVisit"
                      value={formData?.secondVisit || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Follow Place</Form.Label>
                    <Form.Control
                      type="text"
                      name="followPlace"
                      value={formData?.followPlace || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Referred By</Form.Label>
                    <Form.Control
                      type="text"
                      name="referredBy"
                      value={formData?.referredBy || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                type="submit"
                className="w-100 btn-danger fw-semibold p-2 rounded-3 shadow-sm"
              >
               Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EditDischarge;
