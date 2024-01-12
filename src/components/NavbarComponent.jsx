import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo.png';
import "../css/navbar.css";
import LoginIcon from '@mui/icons-material/Login';


function NavbarComponent() {
    return (
        <>
            <div className="announcement">
                <button disabled="disabled">Announcement</button>
                <p>We are happy to announce that we raised $2 Million in seed funding</p>
            </div>
            <Navbar expand="lg mainNav" >
                <Container>
                    <Navbar.Brand href="#home" className="logo">
                        <img src={logo} alt="logo_here"
                            className='mr-4'
                            srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto custom-nav ms-5 me-5">
                            <NavDropdown title="Card Access" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Banking</Nav.Link>
                            <Nav.Link href="#link">Processing</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="loginButton">
                        <button>
                            Login <LoginIcon className='loginIcon' />
                        </button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;