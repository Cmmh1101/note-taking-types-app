import * as React from "react";
import { Col } from "reactstrap";
import { Note } from "../models/NoteModel";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <Col>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </Col>
  );
};

export default NotesList;
