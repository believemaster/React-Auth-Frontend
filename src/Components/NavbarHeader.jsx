import { Navbar, Nav } from "react-bootstrap";

function NavbarHeader() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="white">
        <Navbar.Brand href="/">ReactFront</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default NavbarHeader;
