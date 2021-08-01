import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
 return (
  <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
   <Container>
    <Link href='/'>
     <a>
      <Navbar.Brand>ProShop</Navbar.Brand>
     </a>
    </Link>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
     <Nav className='ms-auto'>
      <Link href='/cart'>
       <Nav.Link>
        <i className='fas fa-shopping-cart'></i> Cart
       </Nav.Link>
      </Link>

      <Link href='/login'>
       <Nav.Link>
        <i className='fas fa-user'></i> Sign In
       </Nav.Link>
      </Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
