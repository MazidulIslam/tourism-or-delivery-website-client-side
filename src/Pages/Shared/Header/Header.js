import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        // style={{ height: "70px" }}
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="p-2">
          <Navbar.Brand className="text-warning fw-bold fs-3" to="/home">
            Explore Wonderland
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#offers">
                Offers
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Our Service
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#gallery">
                Gallery
              </Nav.Link>
              {user?.displayName ? (
                <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    <Image
                      style={{
                        width: "22px",
                        marginRight: "8px",
                      }}
                      src={user?.photoURL}
                      roundedCircle
                    />
                    {user?.displayName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        as={Link}
                        to="/myOrders"
                      >
                        My Orders
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        as={Link}
                        to="/manageAllOrders"
                      >
                        Manage All Orders
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        as={Link}
                        to="/addNewOffer"
                      >
                        Add New Offer
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-center">
                      <Button onClick={logOut} variant="danger">
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
