import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


function Header(props){
    return (
        <div className="mb-5">
            <Navbar bg="dark" data-bs-theme="dark" style={{height: "100px"}}> 
                <Container fluid>
                        <Navbar.Brand href="/home" style={{fontSize: "30px"}}>
                            <li> Public Space NYC </li>
                        </Navbar.Brand> 
                        <Nav className="ms-auto">
                            <Nav.Link href="/home"><Button variant="outline-light" size="lg">Home</Button></Nav.Link>
                            <Nav.Link href="/browse"><Button variant="outline-light" size="lg">Browse</Button></Nav.Link>
                            <Nav.Link href="/myparks"><Button variant="outline-light" size="lg">My Parks</Button></Nav.Link>
                            <Nav.Link href="/myreviews"><Button variant="outline-light" size="lg">My Reviews</Button></Nav.Link>
                            <Nav.Link href="/account"><Button variant="outline-light" size="lg">My Account</Button></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header; 