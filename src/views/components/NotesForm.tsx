import { FormEvent, useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export interface FormProps {
  titleInput: string | undefined;
  note: string;
  group?: [];
  setTitleInput: (value: string) => void;
  setNote: (value: string) => void;
  setGroup?: ([]: any) => void;
}

const NotesForm = ({
  titleInput,
  setTitleInput,
  setNote,
  note,
  setGroup,
  group,
}: FormProps) => {
  const createNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = form.querySelector("#titleInput") as HTMLInputElement;
    const noteText = form.querySelector("#note") as HTMLInputElement;
    setTitleInput(title.value);
    setNote(noteText.value);

    // setGroup([...group, { title: titleInput, noteText: note }]);
    setTitleInput("");
    setNote("");
    console.log(title.value);
    console.log(noteText.value);
  };

  return (
    <Row>
      <Col xs={12} className="my-3">
        <Form onSubmit={(e) => createNote(e)}>
          <FormGroup>
            <Label for="titleInput">Title:</Label>
            <Input
              id="titleInput"
              name="text"
              type="text"
              placeholder="Note Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="note">Note:</Label>
            <Input
              id="note"
              name="text"
              type="textarea"
              placeholder="Write some thoughts"
            />
          </FormGroup>

          <div>
            <Button
              type="submit"
              color="primary"
              onClick={(e) => createNote}
              className="mx-2"
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
