import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-center contact">Contact</h1>
      <Row style={{ width: "400px", margin: "auto" }} className="pt-4">
        <p>
          You can reach me at:<br></br>
          <span className="email">marte.moslet@hotmail.com</span>
          <br></br> Or find me online at:
        </p>
        <Col className="d-flex justify-content-center mt-4">
          <Link to="https://github.com/martemoslet">
            <FaGithub size={35} className="me-3 icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/marte-moslet-728781138">
            <FaLinkedin size={35} className="me-3 icon" />
          </Link>
          <Link to="https://www.instagram.com/martemo/">
            <FaInstagram size={35} className="icon" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
