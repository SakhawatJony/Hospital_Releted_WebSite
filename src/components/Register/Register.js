import { faEnvelope, faLink, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { error, handleRegistration,handleNameChange,handleGoogleSignIn,handleEmailChange,handlePasswordChange,processLogin,registerNewUser} = useAuth();
    return (
        <div>
           <div className="text-center my-4">
      <h2>Please Register</h2>
      <p className=" mt-2">Register with Email & Password</p>
      <p className="text-danger text-center"></p>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleRegistration}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  type="text"
                  autoComplete="current-name"
                  id="name"
                  placeholder="Enter your name"
                  onBlur={handleNameChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                  onBlur={handleEmailChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                  onBlur={handlePasswordChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <div className="row mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary mt-2 w-100">
            Register
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" as={Link} to="/login">
          Already have an account? Please login!
        </NavLink>
      </p>
    </div>
  </div>
    );
};

export default Register;