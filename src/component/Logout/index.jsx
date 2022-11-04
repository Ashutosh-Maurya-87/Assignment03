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
    Navigate("/home");
  };
  return (
    <Container>
      <Row>
        <Col sm={12} lg={12} md={12}>
          <div className="logoutCard">
            <Card
              style={{
                width: "20rem",
                height: '10rem'
              }}
            >
              <CardHeader className="text-center">
                <h5>Logout</h5>
              </CardHeader>
              <CardBody>
                <p className="text-center">Are you want to logout!</p>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <Button onClick={handleYes} color='primary'>Yes</Button>
                  </div>
                  <div>
                    <Button onClick={handleNo} className="ms-2" color='primary'>
                      No
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logout;
