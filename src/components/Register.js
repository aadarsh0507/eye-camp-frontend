import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser, FaIdBadge, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    employeeId: "",
    password: "",
    passwordConfirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, employeeId, password, passwordConfirmation } = formData;

    if (!firstName || !employeeId || !password || !passwordConfirmation) {
      setError("All fields are required.");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/signup", formData);
      console.log("Response:", response.data);
      setSuccess(true);
      setError(null);
    } catch (err) {
      let errorMessage = "An error occurred while submitting the form.";
      if (err.response) {
        errorMessage = err.response.data.message || err.message;
      } else if (err.request) {
        errorMessage = "No response from the server. Please check your network connection.";
      } else {
        errorMessage = err.message || "Something went wrong. Please try again later.";
      }
      setError(errorMessage);
      setSuccess(false);
    }
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
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-3 shadow-lg rounded-4">
              <h3 className="text-center text-danger mb-3">Create an Account</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Name</Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text>
                      <FaUser />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Employee ID</Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text>
                      <FaIdBadge />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="employeeId"
                      placeholder="Enter your Employee ID"
                      value={formData.employeeId}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Password</Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="passwordConfirmation"
                      placeholder="Confirm your password"
                      value={formData.passwordConfirmation}
                      onChange={handleChange}
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Button
                  variant="danger"
                  type="submit"
                  className="w-100 mt-2"
                  style={{
                    fontSize: "14px",
                    padding: "8px",
                    fontWeight: "bold",
                    background: "#ff5e62",
                    border: "none",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#e04a50")}
                  onMouseOut={(e) => (e.target.style.background = "#ff5e62")}
                >
                  Signup
                </Button>
              </Form>

              {success && (
                <Alert variant="success" className="mt-2 text-center">
                  Signup successful! You can now <a href="/login">Login</a>.
                </Alert>
              )}
              {error && (
                <Alert variant="danger" className="mt-2 text-center">
                  {error}
                </Alert>
              )}

              <p className="text-center mt-2">
                Already have an account? <a href="/login" className="text-danger">Login here</a>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
