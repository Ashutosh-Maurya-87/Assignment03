import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Form,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
} from "reactstrap";
import { blogData } from "../../Redux/Actions";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const REDUX_BLOG_DATA = useSelector((state) => state.AllReducers?.blogData);
  const [blog, setBlog] = useState([]);
  const [showBlog, setShowBlog] = useState(false);
  //   const [blogData, setBlogData] = useState([]);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // setShowBlog(true);
    setTitle("");
    setAbout("");
    setContent("");
    const formData = {
      title: title,
      about: about,
      content: content,
    };
    setBlog([...blog, formData]);
    dispatch(blogData([...blog, formData]));
  };

  const handleRemove = (i) => {
    setBlog(blog.splice(i, 1))
    dispatch(blogData(blog));
    
  };

  const handleLogout =() => {
    navigate('/logout')
  }
  return (
    <>
      <div className="text-end m-3">
        <Button onClick={handleLogout} color='primary'>Logout</Button>
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
              <h5>About Blog</h5>
              <Input
                type="text"
                placeholder="enter about blog"
                name="blog"
                onChange={(e) => setAbout(e.target.value)}
              />
              <h5>Blog Content</h5>
              <textarea
                placeholder="write"
                onChange={(e) => setContent(e.target.value)}
                className="textArea"
              />
            </CardBody>
            <Button onClick={handleSubmit} color='primary'>Submit</Button>
          </Card>
        </div>
      </Form>
      <div>
        {REDUX_BLOG_DATA.map((item, i) => {
          return (
            <Card key={i} className="blogCard">
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
          );
        })}
      </div>
      {/* <div>{showBlog && REDUX_BLOG_DATA}</div> */}
    </>
  );
};

export default Home;
