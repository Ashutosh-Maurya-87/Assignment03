import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import { userLoginData } from "../../Redux/Actions";
import "./login.css";
import loginAvtar from "../../assets/images/avtarImage.jpg";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /**
   * @description function for login user
   */
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
                height: "30rem",
              }}
            >
              <CardHeader className="text-center headerCard">
                <h3>
                  <u>Login Form</u>
                </h3>
              </CardHeader>

              <CardBody>
                <CardImg
                  width="50%"
                  height={"20%"}
                  src={loginAvtar}
                  alt="photo"
                  className="avtarImage"
                />
                <Form>
                  Email:{" "}
                  <Input
                    type={"email"}
                    placeholder="enter your e-mail id"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-danger m-0 p-0">{emailError}</p>
                  )}
                  <br />
                  Password:{" "}
                  <Input
                    type={"password"}
                    placeholder="password"
                    name="pass"
                    // className="mt-3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <p className="text-danger m-0 p-0">{passwordError}</p>
                  )}
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
