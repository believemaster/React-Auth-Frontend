import { Navbar, Nav } from "react-bootstrap";

function NavbarHeader() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="white">
        <Navbar.Brand href="#home">ReactFront</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#features">Register</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default NavbarHeader;
