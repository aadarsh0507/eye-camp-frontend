import React, { useContext } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

const Surgery = () => {
  const navigate = useNavigate(); 
  const { formData, setFormData } = useContext(FormContext); // Use FormContext

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleNext = (e) => {
    e.preventDefault();
    navigate("/editdischarge"); 
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
      <Card 
        className="p-4 shadow-lg rounded-4 w-100" 
        style={{ maxWidth: "900px", border: "none", backgroundColor: "#ffffffd9" }}
      >
        <Container>
          <h3 className="text-danger mb-4 text-center">Surgery Booking</h3>
          <Form onSubmit={handleNext}>
            {/* Registration Datetime */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Registration Datetime</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="datetime-local"
                  name="registrationDatetime"
                  value={formData.registrationDatetime}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* OT In Datetime */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">OT In Datetime</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="datetime-local"
                  name="otDatetime"
                  value={formData.otDatetime}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* Surgery Date */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Surgery Date</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="date"
                  name="surgeryDate"
                  value={formData.surgeryDate}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* Surgery Place */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Surgery Place</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="surgeryPlace"
                  value={formData.surgeryPlace}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* Operated Eye (Radio Buttons) */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Operated Eye</Form.Label>
              <Col sm="9">
                <Form.Check
                  type="radio"
                  label="Right"
                  name="operatedEye"
                  value="Right"
                  checked={formData.operatedEye === "Right"}
                  onChange={handleChange}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="Left"
                  name="operatedEye"
                  value="Left"
                  checked={formData.operatedEye === "Left"}
                  onChange={handleChange}
                  inline
                />
              </Col>
            </Form.Group>

            {/* Procedure Name */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Procedure Name</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="procedureName"
                  value={formData.procedureName}
                  onChange={handleChange}
                  placeholder="Enter Procedure Name"
                />
              </Col>
            </Form.Group>

            {/* Surgeon Name */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Surgeon Name</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="surgeonName"
                  value={formData.surgeonName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-3 w-100 btn-danger rounded-3 p-2 fw-semibold shadow-sm"
            >
              Next
            </Button>
          </Form>
        </Container>
      </Card>
    </div>
  );
};

export default Surgery;
