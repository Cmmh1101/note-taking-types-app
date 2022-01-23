import { FormEvent, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import NotesDisplay from "./components/NotesDisplay";
import NotesForm from "./components/NotesForm";

const Home = () => {
  const [titleInput, setTitleInput] = useState("");
  const [note, setNote] = useState("");

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <h1>homepage</h1>
          </Col>
        </Row>

        <NotesForm
          titleInput={titleInput}
          note={note}
          setTitleInput={setTitleInput}
          setNote={setNote}
        />

        <NotesDisplay />
      </Container>
    </>
  );
};

export default Home;
