import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, Outlet } from "react-router-dom";
import { Container, NavbarBrand } from "react-bootstrap";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: 500 }}>
            21030401030
          </Navbar.Brand>
          <Nav className=" d-flex">
            <Nav.Link>
              <Link to={"/"} style={linkStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link
              style={{ backgroundColor: "Highlight", borderRadius: 13 }}
            >
              <Link
                to={"AddDetails"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Add
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
