import * as React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "reactstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar className="sticky-top bg-dark">
      <Container>
        <NavbarBrand>React typescript notes</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
