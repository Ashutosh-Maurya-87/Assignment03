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
  Row,
} from "reactstrap";
import { userLoginData } from "../../Redux/Actions";
import "./logout.css";

const Logout = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const handlePassword = () => {

  // }
  // const handleEmail = () => {

  // }
  const handleLogin = () => {
    // if (!email && !password) {
    //   setEmailError("please enter email");
    //   setPasswordError("please enter password");
    // } else {
    //   localStorage.setItem("login", JSON.stringify(true));
    //   Navigate("/home");
    //   const payload = {
    //     userName: email,
    //     password: password,
    //   };
    //   dispatch(userLoginData(payload));
    // }
  };

  const handleYes = () => {
    localStorage.removeItem("login");
    Navigate("/");
  };
  const handleNo = () => {
    Navigate("/logout");
  };
  return (
    <Container>
      <Row>
        <Col sm={12} lg={12} md={12}>
          <div className="loginCard">
            <Card
              style={{
                width: "20rem",
              }}
            >
              <CardHeader className="text-center">Logout</CardHeader>
              <CardBody>
                <div className="d-flex justify-content-center">
                  <div>
                    <Button onClick={handleYes}>Yes</Button>
                  </div>
                  <div>
                    <Button onClick={handleNo} className="ms-2">
                      No
                    </Button>
                  </div>
                </div>
                {/* <Form>
                  Email:{" "}
                  <input
                    type={"email"}
                    placeholder="enter your mail"
                    name="email"
                    className="ms-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-danger">{emailError}</p>
                  <br />
                  Password:{" "}
                  <input
                    type={"password"}
                    placeholder="password"
                    name="pass"
                    // className="mt-3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-danger">{passwordError}</p>
                </Form> */}
              </CardBody>
              {/* <CardFooter className="footerCard">
                // {/* <Button onClick={handleLogin}>Login</Button> */}
              {/* </CardFooter> */}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logout;
