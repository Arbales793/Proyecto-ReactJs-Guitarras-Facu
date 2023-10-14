import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "grey" }}>
            <Container>
                <Navbar.Brand href="#home">Tienda Guitarras Facu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Guitarras Criollas</Nav.Link>
                        <Nav.Link href="#link">Guitarras electricas</Nav.Link>
                        <Nav.Link href="#link">Accesorios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar