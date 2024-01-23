import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";

const NavbarHeader = ({ user }) => {
  const logout = async () => {
    await axios.post('logout', {});
  }

  let links;

  if (user) {
    links = (
      <>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
      </>
    )
  } else {
    links = (
      <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </>
    );
  }

  return (
    <>
      <Navbar bg="white" data-bs-theme="white">
        <Navbar.Brand href="/">ReactFront</Navbar.Brand>
        <Nav className="ms-auto">
          {links}
        </Nav>
      </Navbar>
    </>
  );
}
export default NavbarHeader;
