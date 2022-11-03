import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormGroup, Input, Label, Form } from "reactstrap";
import { blogData } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const REDUX_BLOG_DATA = useSelector((state) => state.AllReducers?.blogData);
  const [blog, setBlog] = useState("");
  const [showBlog, setShowBlog] = useState(false);

  const handleSubmit = () => {
    setShowBlog(true);
    dispatch(blogData(blog));
  };
  console.log(REDUX_BLOG_DATA)
  return (
    <>
      <Form>
        <h3>Write the blog</h3>
        <textarea
          placeholder="write"
          onChange={(e) => setBlog(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      {REDUX_BLOG_DATA}
      {/* <div>{showBlog && REDUX_BLOG_DATA}</div> */}
    </>
  );
};

export default Home;
