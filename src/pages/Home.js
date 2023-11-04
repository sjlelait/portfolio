import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJsSquare, faNodeJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Sara-logo.png';
import girl from '../assets/github-girl.png';

const Home = (props) => {
  return (
    <div className='homePageContent'>
      <Container>
        <Row>
          <Col md={7}>
            <div className='intro-txt'>
              <img className="logo" src={logo} alt="Sara Le Lait" />
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'Methodical Multitasker',
                    'Creative Collaborator',
                    'Nature Nerd',
                    'Hilarity Hound'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <div className='skills'>
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
            </div>
          </Col>
          <Col md={5}>
            <img className='home-img' src={girl} alt='Github-Girl'></img>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Home;