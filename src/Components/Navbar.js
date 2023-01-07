import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from 'react-bootstrap/Image'
function OffcanvasExample() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" style={{position: "sticky",top: "0px", opacity:"light",borderRadius: "15px"}} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
            {/* <img
              src="../logo3.jpeg"
              width="30"
              height="30"
              className="rounded"
            /> */}
              ARC</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                   VEERA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <Nav.Link href="resume">Resume</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
