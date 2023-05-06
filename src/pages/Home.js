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
                <h3>Skills</h3>
                <Row className='skills-row'>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faCss3Alt} /> CSS
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faHtml5} /> HTML
                    </div>
                  </Col>                
                </Row>
                <Row className='skills-row'>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faJsSquare} /> JavaScript
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faNodeJs} /> NodeJS
                    </div>
                  </Col>
                </Row>
                <Row className='skills-row'>              
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faReact} /> React
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPython} /> Python
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