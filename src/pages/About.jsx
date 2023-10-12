import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <Container>
      <h1 className="text-center about">About</h1>
      <Row style={{ width: "400px", margin: "auto" }} className="pt-4">
        <p>
          My name is Marte and I am studying front-end development at Noroff
          school of technology and digital media.
        </p>
        <p>
          I also have a bachelor degree in engineering from NTNU, and I have
          worked 2 years with maintenance in Forsvarsbygg.
        </p>
        <p>
          I like to spent my free time hiking and training with my two dogs.
        </p>
      </Row>
    </Container>
  );
}
