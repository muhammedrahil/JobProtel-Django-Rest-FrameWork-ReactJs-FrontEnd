import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "../../Utils/Axios";
import { BsPersonFill, BsFillHeartFill, BsBellFill, BsFillChatRightTextFill } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import './NavBar.css'



const NavBar = () => {

  const [Companydeatails, SetCompanydeatails] = useState(null)

  useEffect(() => {
    Websitedeatails()
  }, [])

  const Websitedeatails = async () => {
    const res = await axios.get('api/webdeatails/').then((responce) => {
      if (responce.status === 200) {
        SetCompanydeatails(responce.data[0]);
        console.log('Websitedeatails get successfully');
      }
    })
  }

  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid className='shadow-sm' >
          <Navbar.Brand href="#">
            <img src={Companydeatails ? Companydeatails.logo : null} height="70px" alt="" />
            <Navbar.Text className='h2 fw-bold no-view-mobail'><cite>{Companydeatails ? Companydeatails.name : null}</cite></Navbar.Text>
          </Navbar.Brand>

          {/* view only mobail divices */}
          <div className='ms-5 d-xl-none'>
            <BsFillChatRightTextFill className='me-5 h5' />
            <BsBellFill className='me-5 h5' />
          </div>
          {/* end view only mobail divices */}


          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="basic-nav-dropdown" className="justify-content-end">
            <Nav style={{ maxHeight: '100px' }} navbarScroll >

              {/* view only big screen divices */}

              <Nav.Link href="#home" className='d-none d-sm-block'><BsFillChatRightTextFill className='me-5 h5' /> </Nav.Link>
              <Nav.Link href="#home" className='d-none d-sm-block'><BsBellFill className='me-5 h5' /></Nav.Link>

              <NavDropdown className='me-5 d-none d-sm-block' title={<BsPersonFill className='h5' />} >
                <NavDropdown.ItemText className='h5 fw-bold '><cite>admin@admin.com</cite> </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1" className=''>
                  <NavDropdown.ItemText><ImProfile className='h6'/><span className='p fw-bold' style={{ margin: "10px" }}>Profile</span> </NavDropdown.ItemText>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <NavDropdown.ItemText><BsFillHeartFill className='h6'/> <span className='p fw-bold' style={{ margin: "10px" }}>My Job</span> </NavDropdown.ItemText>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">
                  <NavDropdown.ItemText><RiLogoutBoxRFill className='h6'/> <span className='p fw-bold' style={{ margin: "10px" }}>SignOut</span> </NavDropdown.ItemText>
                </NavDropdown.Item>
              </NavDropdown>
              {/* end view only big screen divices */}

              {/* view only mobail divices */}

              <Nav.Link href="#home" className='d-xl-none'><ImProfile className='h6' /><span className='p fw-bold' style={{ margin: "10px" }}>Profile</span>  </Nav.Link>
              <Nav.Link href="#home" className='d-xl-none'><BsFillHeartFill className='h6' /> <span className='p fw-bold' style={{ margin: "10px" }}>My Job</span> </Nav.Link>
              <Nav.Link href="#home" className='d-xl-none'><RiLogoutBoxRFill className='h6' /> <span className='p fw-bold' style={{ margin: "10px" }}>SignOut</span>  </Nav.Link>
              
              {/* end view only mobail divices */}

            </Nav>
          </Navbar.Collapse>

          <div className='no-view-mobail'>
            <Navbar.Text className='me-2 h6'>|</Navbar.Text>
            <Navbar.Text className='me-2 h6'> Employer / Job Post </Navbar.Text>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
