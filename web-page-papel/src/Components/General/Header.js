import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const { username } = props;

  return (
    //no se usan los links de react-bootstrap porque recargan pagina, son mejores los de react-router-dom
    <Navbar bg="dark" expand="lg">
      <Link to="/" className="navbar-brand">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}${"user-an"}.png`}
        />
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {
          <Nav className="mr-auto">
            <Fragment>
                <NavLink
                  to="/proyectos"
                  className="nav-link"
                  activeClassName="active"
                >
                  Nuestros proyectos
                </NavLink>
                <NavLink
                  to="/somos"
                  className="nav-link"
                  activeClassName="active"
                >
                  Quiénes somos?
                </NavLink>
                <NavLink
                  to="/contactenos"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contactenos
                </NavLink>
              </Fragment>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
