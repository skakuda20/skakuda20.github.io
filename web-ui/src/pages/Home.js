import '../App.css';
import Introduction from '../components/Introduction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <Container className="justify-content-center" style={{ paddingLeft: 0, 
                paddingRight: 0, 
                marginLeft: 0, 
                marginRight: 0, 
                width: '100%'}} fluid>    
                                                        
                <div style={{ backgroundColor: '#283618', paddingBottom: 20, marginBottom: 50}} >
                    <Row xs={12} className="justify-content-center" style={{marginLeft: 0, marginRight:0}}>
                        <img style={{
                        height: '20%',
                        width: '20%',
                        borderRadius: 50,
                        overflow: 'hidden',
                        paddingTop: 30,
                        paddingBottom: 20
                        }} 
                        src={require('../images/IMG_6882.JPG')} alt="Stephen Kakuda" />
                    </Row>  
                    <Row xs={12} className="justify-content-center" style={{marginLeft: 0, marginRight:0}}>
                        <h1 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '350%'}} >Stephen Kakuda</h1>
                    </Row>
                    <Row xs={12} className="justify-content-center" style={{marginLeft: 0, marginRight:0}}>
                        <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'150%'}}>Full Stack | AI | Computer Vision</h2>
                    </Row>  
                </div>

                <div>
                    <Row xs={12} className="justify-content-center" style={{ paddingBottom: 50}} style={{marginLeft: 0, marginRight:0}}>
                        <Col></Col>
                        <Col xs={12} md={6}><Introduction /></Col>
                        <Col></Col>
                    </Row>

                    <Row style={{marginLeft: 0, marginRight:0}}>
                        <Col></Col>
                        <Col xs={12} md={6} >
                        <p className="text-right" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}><strong>Education:</strong> B.S. Computer Science @ UC Irvine</p>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row style={{marginLeft: 0, marginRight:0}}>
                        <Col></Col>
                        <Col xs={12} md={6}>
                        <p className="text-right" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}><strong>Specialization:</strong> Intelligent Systems</p>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row style={{marginLeft: 0, marginRight:0}}>
                        <Col></Col>
                        <Col xs={12} md={6}>
                        <p className="text-right" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}><strong>Minor:</strong> Business Management</p>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row style={{marginLeft: 0, marginRight:0}}>
                        <Col></Col>
                        <Col xs={12} md={6}>
                        <p className="text-right" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}><strong>Contact:</strong> (808) 722-2521 | stephenkakuda@gmail.com</p>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row xs={12} md={6} style={{ padding: 50, marginLeft: 0, marginRight:0}}>
                    </Row>

                    <div style={{ backgroundColor: '#FEFAE0' }}>
                        <Row style={{ paddingTop: 20, marginLeft: 0, marginRight:0}}>
                        <p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}>(808) 722-2521 | stephenkakuda@gmail.com</p>
                        </Row>
                    </div>

                </div>



            </Container>
        </div>
    );
  }
  
  export default Home;