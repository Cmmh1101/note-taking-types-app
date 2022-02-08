import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/NoteModel";
// import Home from "./views/Home";
// import Login from "./views/Login";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Schedule meeting with UX/UI team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home/*" element={<Home />} />
    //   </Routes>
    // </Router>
    <>
      <Header />
      <Container className="">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
