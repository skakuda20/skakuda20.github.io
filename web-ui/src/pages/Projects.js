import '../App.css';
import { useRef } from 'react';
import Introduction from '../components/Introduction';
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollinsAerospace from '../components/CollinsAerospace';
import ImageDetector from '../components/ImageDetector';
import Stack from 'react-bootstrap/Stack';
import Collapse from 'react-bootstrap/esm/Collapse';

function Projects() {
    return (
      <div>
        <Container className="justify-content-center" style={{ paddingLeft: 0, 
            paddingRight: 0, 
            marginLeft: 0, 
            marginRight: 0, 
            width: '100%'}} fluid> 
            
            <Row xs={12} className="justify-content-center" style={{marginLeft: 0, marginRight:0}}>
                <h1 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize: '250%', paddingTop:20, paddingBottom:20}}>Here's some of my work...</h1>
            </Row>
            
            <Row style={{marginLeft: 0, marginRight:0}}>
                <Col xs={0} md={1}></Col>

                {/* Human Settlement Detector */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#BC6C25', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>Human Settlement Detector</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col ><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 0,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/augmented_tiles.png')} alt="facial detection" /> 
                            </Row>
                             
                        </Container>
                            
                    </div>
                </Col>
                
                <Col xs={0} md={1}></Col>  

                {/* Pulmonary Fibrosis ML Model */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#606C38', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>Pulmonary Fibrosis ML Model</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col ><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 10,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/mse_fvc.png')} alt="local alignemnt by hand" /> 
                            </Row>
                             
                        </Container>
                            
                    </div>
                </Col>
                
                <Col xs={0} md={1}></Col>  

                {/* MoodCloud App */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#BC6C25', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>MoodCloud</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 10,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/moodcloud_logo.png')} alt="moodcloud" /> 
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col xs={0} md={1}></Col>                     
            </Row>

            <Row style={{marginLeft: 0, marginRight:0}}>
                <Col xs={0} md={1}></Col>

                {/*  1  */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#606C38', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>Image Detector</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 0,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/face_detect.png')} alt="facial detection" /> 
                            </Row>
                             
                        </Container>
                            
                    </div>
                </Col>
                
                <Col xs={0} md={1}></Col>  

                {/*  2  */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#BC6C25', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>DNA/RNA Aligner</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 10,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/hand_alignment.jpeg')} alt="local alignemnt by hand" /> 
                            </Row>
                             
                        </Container>
                            
                    </div>
                </Col>
                
                <Col xs={0} md={1}></Col>  

                {/*  Trading Card Scaner  */}
                <Col className="justify-content-center d-flex" style={{paddingBottom:30}}> 
                    <div style={{ backgroundColor:'#606C38', borderRadius:10}}>
                        <Container className="justify-content-center">
                            <Row>
                                <h2 className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize: '200%', paddingTop:20}}>Trading Card Scanner</h2>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col><p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'white', fontSize:'100%'}}>
                                    By computing pixel gradients, the system creates feature map for each image. 
                                    Trained on multiple example images, the model recognizes 
                                    objects and returns the top 5 detections in new images. </p></Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <img style={{
                                height: '60%',
                                width: '60%',
                                borderRadius: 10,
                                overflow: 'hidden',
                                paddingTop: 10,
                                paddingBottom: 20
                                }} 
                                src={require('../images/card_scanner.jpg')} alt="moodcloud" /> 
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col xs={0} md={1}></Col>                     
            </Row>



            <div style={{ backgroundColor: '#FEFAE0' }}>
                    <Row style={{ paddingTop: 20, marginLeft: 0, marginRight:0}}>
                    <p className="text-center" style={{ fontFamily: 'Inria Serif', color: 'black', fontSize:'120%'}}>(808) 722-2521 | stephenkakuda@gmail.com</p>
                    </Row>
            </div>
        </Container>
      </div>
    );
  }
  
  export default Projects;