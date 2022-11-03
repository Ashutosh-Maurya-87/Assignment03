import React, { useState } from "react";
import { Button, FormGroup, Input, Label, Form } from "reactstrap";

const Home = () => {
  const [blog, setBlog] = useState("");
  const [showBlog, setShowBlog] = useState(false);

  const handleSubmit = () => {
    setShowBlog(true);
  };
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

      <div>{showBlog && blog}</div>
    </>
  );
};

export default Home;
