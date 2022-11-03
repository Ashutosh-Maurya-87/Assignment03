import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import { userLoginData } from "../../Redux/Actions";
import "./login.css";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    if (!email && !password) {
      setEmailError("Please enter email");
      setPasswordError("Please enter password");
    } else if (password.length < 8) {
      setPasswordError("password has minimum 8 character");
    } else {
      localStorage.setItem("login", JSON.stringify(true));
      Navigate("/home");
      const payload = {
        userName: email,
        password: password,
      };
      dispatch(userLoginData(payload));
    }
  };
  return (
    <div fluid="sm" className="container-fluid loginContainer">
      <Row className="rowClass">
        <Col sm={12} lg={12} md={12}>
          <div className="loginCard">
            <Card
              style={{
                width: "30rem",
              }}
            >
              <CardHeader className="text-center headerCard">
                <h3>
                  <u>Login Form</u>
                </h3>
              </CardHeader>
              <CardBody>
                <Form>
                  Email:{" "}
                  <Input
                    type={"email"}
                    placeholder="enter your e-mail id"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-danger">{emailError}</p>
                  <br />
                  Password:{" "}
                  <Input
                    type={"password"}
                    placeholder="password"
                    name="pass"
                    // className="mt-3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-danger">{passwordError}</p>
                </Form>
              </CardBody>
              <CardFooter className="footerCard">
                <Button onClick={handleLogin} color="primary" className="w-50">
                  Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
