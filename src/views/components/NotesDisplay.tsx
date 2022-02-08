import Note from "./Note";

interface Props {
  titleInput: string | undefined;
  note: string | undefined;
  group?: [];
  setTitleInput: (value: string) => void;
  setNote: (value: string) => void;
  setGroup?: ([]: any) => void;
}

const NotesDisplay = ({ titleInput, setTitleInput, note, setNote }: Props) => {
  return (
    <>
      <h1>My notes:</h1>
      <div className="notes-display">
        <Note />
      </div>
    </>
  );
};

export default NotesDisplay;
