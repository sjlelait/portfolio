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
              <div className='intro-txt'>
                <img className="logo" src="https://disperse-sjl.s3.us-east-2.amazonaws.com/Sara-logo.png" alt="Sara Le Lait" />
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'Detail-Oriented Multi-tasker',
                      'Nature Enthusiast',
                      'Creative Collaborator'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>              
              <div className='skills'>
                <h3>Skills</h3>
                <Row className='skills-row'>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faCss3Alt} size='2x' /> CSS
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faHtml5} size='2x' /> HTML
                    </div>
                  </Col>                
                </Row>
                <Row className='skills-row'>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faJsSquare} size='2x' /> JavaScript
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faNodeJs} size='2x' /> NodeJS
                    </div>
                  </Col>
                </Row>
                <Row className='skills-row'>              
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faReact} size='2x' /> React
                    </div>
                  </Col>
                  <Col md={6} className='iconCol'>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPython} size='2x' /> Python
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={5}>
                <img className='home-img' src='https://disperse-sjl.s3.us-east-2.amazonaws.com/github+girl.png' alt='github-girl'></img>
            </Col>
          </Row>
        </Container>        
      </div>
    )
  };
  
  export default Home;