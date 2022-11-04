import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Form,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
  Col,
  Row,
} from "reactstrap";
import { blogData } from "../../Redux/Actions";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [contentError, setContentError] = useState("");
  const REDUX_BLOG_DATA = useSelector((state) => state.AllReducers?.blogData);

  const handleSubmit = () => {
    if (title.length < 1 && about.length < 1 && content.length < 1) {
      setTitleError("Enter title");
      setAboutError("Enter about blog");
      setContentError("Enter content");
    } else {
      const formData = {
        title: title,
        about: about,
        content: content,
      };
      setBlog([...blog, formData]);
      dispatch(blogData([...blog, formData]));
    }
  };
  const data = localStorage.getItem("data");
  console.log("data", JSON.stringify(data));
  const handleRemove = (i) => {
    setBlog(blog.splice(i, 1));
    dispatch(blogData(blog));
  };

  const handleLogout = () => {
    navigate("/logout");
  };
  return (
    <>
      <div className="text-end m-3">
        <Button onClick={handleLogout} color="primary">
          Logout
        </Button>
      </div>
      <Form>
        <h3>Write a blog</h3>
        <div className="blogForm">
          <Card
            style={{
              width: "50%",
            }}
          >
            <CardBody>
              <h5>Blog Title</h5>
              <Input
                type="text"
                placeholder="enter title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              {title.length < 1 && <p className="text-danger">{titleError}</p>}
              <h5>About Blog</h5>
              <Input
                type="text"
                placeholder="enter about blog"
                name="blog"
                onChange={(e) => setAbout(e.target.value)}
              />
              {about.length < 1 && <p className="text-danger">{aboutError}</p>}
              <h5>Blog Content</h5>
              <textarea
                placeholder="write"
                onChange={(e) => setContent(e.target.value)}
                className="textArea"
              />
              {content.length < 1 && (
                <p className="text-danger">{contentError}</p>
              )}
            </CardBody>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </Card>
        </div>
      </Form>
      <Row className="cardBlog">
        {Object.values(REDUX_BLOG_DATA)?.map((item, i) => {
          return (
            <Col key={i} sm={12} md={3} lg={3} className="mt-2">
              <Card className="blogCard">
                <CardHeader>{item?.title}</CardHeader>
                <CardBody>
                  <p>{item?.about}</p>
                  <p>{item?.content}</p>
                </CardBody>
                <CardFooter className="text-end">
                  <Button color="primary" onClick={() => handleRemove(i)}>
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
