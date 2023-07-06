import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/styles/header/Header.css'
import { ProductContext } from '../../context/ProductContext';
import { ConstantValues } from '../../constant/ContantValues';
function Header() {
  const {state, dispatch}:any= useContext(ProductContext)
  const [inputData, setInputData] = useState('');
  const handleInputChange = (event:any) => {
    setInputData(event.target.value);
    dispatch({
      type:ConstantValues.getProductSearch,
      payload:{
        userInput :inputData,
      }
    })
  };
  // console.log("INPUT DATA", inputData)
  return (
    <Navbar expand="lg" variant='light' className="bg-light">
      <Container fluid>
        <Navbar.Brand href="/homepage" >Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/homepage" >Home</Nav.Link>
            <Nav.Link href="/products" >Products</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

function setUserInput(value: any) {
  throw new Error('Function not implemented.');
}
