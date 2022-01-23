import React, { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Form, Input, Button, FormGroup, Label } from "reactstrap";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <h1>Login here</h1>
      <Form onSubmit={(e) => handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>

        <Button onClick={() => navigate("/home")}>Login</Button>
      </Form>
    </>
  );
};

export default Login;
