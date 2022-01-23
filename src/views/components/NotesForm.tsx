import { FormEvent } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export interface FormProps {
  titleInput: string | undefined;
  note: string | undefined;
  notesGroup?: FormEvent<HTMLFormElement> | undefined;
  setTitleInput: (value: string) => void;
  setNote: (value: string) => void;
  setNotesGroup?: (e: FormEvent<HTMLFormElement>) => void;
}

const NotesForm = ({
  titleInput,
  setTitleInput,
  setNote,
  note,
  notesGroup,
  setNotesGroup,
}: FormProps) => {
  const createNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form.querySelector("#titleInput") as HTMLInputElement;
    const note = form.querySelector("#note") as HTMLInputElement;
    setTitleInput(titleInput.value);
    setNote(note.value);
    console.log(titleInput.value);
    console.log(note.value);
  };

  const clearInputs = () => {
    setTitleInput("");
    setNote("");
    console.log(titleInput);
    console.log(note);
  };

  return (
    <Row>
      <Col xs={12} className="my-3">
        <Form onSubmit={(e) => createNote(e)}>
          <FormGroup>
            <Label for="titleInput">Title:</Label>
            <Input id="titleInput" name="text" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="note">Note:</Label>
            <Input id="note" name="text" type="textarea" />
          </FormGroup>

          <div>
            <Button
              type="submit"
              color="primary"
              className="mx-2"
              onClick={clearInputs}
            >
              Save
            </Button>
          </div>
        </Form>
        {/* <Button
          type="button"
          onClick={() => discardNote()}
          color="danger"
          className="ml-2"
        >
          delete
        </Button> */}
      </Col>
    </Row>
  );
};

export default NotesForm;
