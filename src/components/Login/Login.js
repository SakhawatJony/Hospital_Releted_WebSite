import { faEnvelope, faLink, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
  const { error,handleGoogleSignIn,handleEmailChange,handlePasswordChange,processLogin,handleResetPassword,logOut} = useAuth();
    return (
        <div>
           <div className="text-center my-4">
       <h2>Please Login</h2>
      <p className=" mt-2">Login Your Email & Password</p>
      <p className="text-danger text-center"></p>
      <div className="w-25 mx-auto">
        <Form onSubmit={processLogin}>
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
                  onBlur={handleEmailChange}
                  placeholder="Enter your email address"
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
                  onBlur={handlePasswordChange}
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
         <p>{error}</p>

          </Row>
          <button type="submit"  className="btn btn-primary mt-2 w-100">
            LogIn
          </button>
          <button onClick={handleResetPassword} type="submit"  className="btn btn-primary mt-2 w-100">
            Forget Password
          </button>
        </Form>
       
       
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" as={Link} to="/register">
          Are You Register? Creact an Accounts!
        </NavLink>
        <br />
        <Button  className="btn btn-success" onClick={handleGoogleSignIn} variant="secondary" size="sm">
      GoogleSingIn
    </Button>
      </p>
    </div>
  </div>
           
       
    );
};

export default Login;