import { Row, Col, Card, CardTitle, CardText } from "reactstrap";

const Note = () => {
  return (
    <>
      <Row className="my-3">
        <Col sm="6">
          <Card body color="info" inverse className="nota">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <div className="dropdown-divider" />

            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Note;
