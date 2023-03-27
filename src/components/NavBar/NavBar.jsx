import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!">
                        <img src={logo} height="20" className="d-inline-block align-center" alt="Avon Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown id="nav-dropdown" title="Shop by brand">
                                <NavDropdown.Item href="#!">View All</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#!">Today</NavDropdown.Item>
                                <NavDropdown.Item href="#!">Tomorrow</NavDropdown.Item>
                                <NavDropdown.Item href="#!">Always</NavDropdown.Item>
                                <NavDropdown.Item href="#!">The Moment</NavDropdown.Item>
                                <NavDropdown.Item href="#!">Wonder</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown id="nav-dropdown" title="Shop by product type">
                                <NavDropdown.Item href="#!">View All</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#!">Eau de Parfum 50ml</NavDropdown.Item>
                                <NavDropdown.Item href="#!">Purse Spray 10ml</NavDropdown.Item>
                                <NavDropdown.Item href="#!">Body Lotion 150ml</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <CartWidget cartQty={0} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}

export default NavBar;