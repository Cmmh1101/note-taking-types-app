import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { Note } from "../models/NoteModel";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <Col sm={6} className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <CardBody>
          <CardTitle>{note.title}</CardTitle>
          <CardText>{note.text}</CardText>
          <CardSubtitle className="text-muted">{note.date}</CardSubtitle>
          <Button
            className="my-3"
            color="danger"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notes;
