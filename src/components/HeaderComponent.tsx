import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IProps {}

export const HeaderComponent: FC<IProps> = ({}) => {
  return (
    <Container fluid>
      {/* Row for mobile and tablet screens */}
      <Row className="d-lg-none">
        <Col className="col-10">
          <h1>JOHN DOE</h1>
        </Col>
        <Col className="col-2">icon</Col>
      </Row>
      {/* Row for larges screens */}
      <Row className="d-none d-lg-block">
        <Col className="col-4">
          <h1>JOHN DOE</h1>
        </Col>
        <Col className="col-8">
          <Row>
            <Col>
              <Link to="/">ACCUEIL</Link>
            </Col>
            <Col>
              <Link to="/services">SERVICES</Link>
            </Col>
            <Col>
              <Link to="/projects">RÉALISATIONS</Link>
            </Col>
            <Col>
              <Link to="/blog">BLOG</Link>
            </Col>
            <Col>
              <Link to="/contact-me">ME CONTACTER</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
