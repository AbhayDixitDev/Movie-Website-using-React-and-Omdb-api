import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Movie Website</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
        <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/webseries">Web Series</Nav.Link>
        <Nav.Link as={NavLink} to="/favourites">
          My Favourites ({favouriteMovies.length}) 
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
