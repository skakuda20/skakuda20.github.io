import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import { NavLink as Link } from "react-router-dom";


function Navheader() {
  return(
    <div  style={{ backgroundColor: '#FEFAE0', paddingTop:10, paddingBottom:10 }}>
                <Row className="justify-content-center" style={{marginLeft: 0, marginRight:0}}>

                    <Col className="justify-content-center"><Link to='Home' style={{textDecoration: 'none'}}><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'150%', marginTop:16}}>Home</p></Link></Col>
                    <Col className="justify-content-center"><Link to='Projects' style={{textDecoration: 'none'}}><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'150%', marginTop:16}}>Projects</p></Link></Col>
                    <Col className="justify-content-center"><Link style={{textDecoration: 'none'}}><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'150%', marginTop:16}}>Keebs</p></Link></Col>
                    <Col className="justify-content-center"><Link to='About' style={{textDecoration: 'none'}}><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'150%', marginTop:16}}>About</p></Link></Col>

                </Row>
            </div>
  );
  }
  
export default Navheader;