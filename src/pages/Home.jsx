import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <h1 className="text-center">
        Hi, I'm Marte<br></br> and this is my <br></br>
        <span className="portfolio">Portfolio</span>
      </h1>
      <Row className="d-flex justify-content-center pt-4">
        <Card style={{ width: "25rem", border: "none" }}>
          <img src="../../public/assets/project-exam-2.png" />
          <Card.Body>
            <Card.Title>Holidaze</Card.Title>
            <Card.Text>
              This was the final project exam at Noroff. The task was to create
              a booking site called Holidaze.
            </Card.Text>
            <div className="d-flex justify-content-center pt-2">
              <Link to="https://github.com/martemoslet/project-exam-2">
                <Button variant="secondary">Github</Button>
              </Link>
              <Link to="https://fancy-croquembouche-2bbd3d.netlify.app/">
                <Button>Website</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem", border: "none" }}>
          <img src="../../public/assets/js-frameworks-ca.png" />
          <Card.Body>
            <Card.Title>eCom store</Card.Title>
            <Card.Text>
              This was the course assignment for JavaScript Frameworks. The goal
              was to build an eCom store using React.
            </Card.Text>
            <div className="d-flex justify-content-center pt-2">
              <Link to="https://github.com/martemoslet/js-frameworks-ca">
                <Button variant="secondary">Github</Button>
              </Link>
              <Link to="https://jolly-dodol-8de8aa.netlify.app/">
                <Button>Website</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem", border: "none" }}>
          <img src="../../public/assets/semester-project-2.png" />
          <Card.Body>
            <Card.Title>Fashion Auction Online</Card.Title>
            <Card.Text>
              This was a semester project at Noroff. The goal was to create an
              auction website.
            </Card.Text>
            <div className="d-flex justify-content-center pt-2">
              <Link to="https://github.com/martemoslet/semester-project2">
                <Button variant="secondary">Github</Button>
              </Link>
              <Link to="https://auction.martemoslet.one/">
                <Button>Website</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
