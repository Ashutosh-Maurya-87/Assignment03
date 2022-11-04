import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";
import "./logout.css";

const Logout = () => {
  const Navigate = useNavigate();
  /**
   * @description function if user want to logout
   */
  const handleYes = () => {
    localStorage.removeItem("login");
    Navigate("/");
  };
  /**
   * @description function if user not want to logout
   */
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
                height: "10rem",
              }}
            >
              <CardHeader className="text-center">
                <h5>Logout</h5>
              </CardHeader>
              <CardBody>
                <p className="text-center">Are you want to logout!</p>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <Button onClick={handleYes} color="primary">
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button onClick={handleNo} className="ms-2" color="primary">
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
