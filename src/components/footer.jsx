import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={4} className="text-center text-md-start">
            <h5 className="mb-3">Movie Website</h5>
            <p className="mb-0">
              Made with <i className="fa fa-heart" /> by{' '}
              <a href="https://github.com/abhaydixitdev" className="text-decoration-none text-light">
                Abhay Dixit
              </a>
            </p>
          </Col>
          <Col sm={12} md={4} className="text-center text-md-start">
            <h5 className="mb-3">Connect with me</h5>
            <Nav className="justify-content-center justify-content-md-start">
              <Nav.Link href="https://github.com/abhaydixitdev" className="text-light">
                <i className="fab fa-github" /> GitHub
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/abhaydixitdev/" className="text-light">
                <i className="fab fa-linkedin-in" /> LinkedIn
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/abhaydixitdev/" className="text-light">
                <i className="fab fa-instagram" /> Instagram
              </Nav.Link>
              <Nav.Link href="https://twitter.com/abhaydixitdev" className="text-light">
                <i className="fab fa-twitter" /> Twitter
              </Nav.Link>
              <Nav.Link href="mailto:abhaydixitdev@gmail.com" className="text-light">
                <i className="fas fa-envelope" /> Gmail
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/abhaydixitdev/" className="text-light">
                <i className="fab fa-facebook-f" /> Facebook
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
