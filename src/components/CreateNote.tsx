import * as React from "react";
import { useRef } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

interface ICreateNoteProps {}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = (props) => {
  const titleRed = useRef();
  const textRef = useRef();
  const colorRef = useRef();
  return (
    <>
      <h2>Create Note</h2>
      <Form className="mt-3 mb-3">
        <FormGroup className="mb-3" id="formBasicTitle">
          <Label>Title</Label>
          <Input type="text" placeholder="Enter Title for the Note" />
        </FormGroup>
        <FormGroup className="mb-3" id="formBasicText">
          <Label>Note</Label>
          <Input type="textarea" rows="3" placeholder="Enter your note" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label htmlFor="colorInput">Notes Color</Label>
          <Input
            type="color"
            id="colorInput"
            title="Choose your color"
            defaultValue="#dfdfdf"
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;
