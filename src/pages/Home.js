import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJsSquare, faNodeJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';

const Home = (props) => {
    return (
      <div className='homePageContent'>
        <Container>
          <Row>
            <Col md={7}>
              <h2>Hey,</h2>
              <h1>I'm Sara Le Lait</h1>
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'Detail-Oriented Multi-tasker',
                    'Nature Enthusiast',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
              <div className='skills'>
                <Row>
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                  </Col>
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faHtml5} />
                    </div>
                  </Col>                
                </Row>
                <Row>
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                  </Col>
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                  </Col>
                </Row>
                <Row>              
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faReact} />
                    </div>
                  </Col>
                  <Col md={3} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPython} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={5}>
                <p>image</p>
            </Col>
          </Row>
        </Container>        
      </div>
    )
  };
  
  export default Home;