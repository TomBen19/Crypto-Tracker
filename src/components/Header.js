import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="#home">Coin Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="../#home">Portfolio</Nav.Link>
          <Nav.Link href="../transactions">Transactions</Nav.Link>
          <Nav.Link href="../exchanges">Exchanges</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
