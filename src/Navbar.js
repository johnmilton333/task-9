import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink} from 'react-router-hash-link';


function BasicExample() {
    const goldenTextStyle = {
      color: '#ed5b01',
    };
  
    return (
      
      <Navbar expand="lg" className="bg-black fixed-top">
        <Container>
          <Navbar.Brand style={goldenTextStyle} className='vall'>
            <h1>DEMOS</h1>
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink}  to='/#' style={goldenTextStyle}>Home </Nav.Link> 
            <Nav.Link as={HashLink}  to='/#career' style={goldenTextStyle}>Career </Nav.Link>
            <Nav.Link as={HashLink}  to='/#about'  style={goldenTextStyle}>About Us</Nav.Link>
            <Nav.Link as={HashLink}  to='/#contact'  style={goldenTextStyle}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;
