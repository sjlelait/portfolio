import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Home = (props) => {
    return (
      <div className="homePageContent">
        <Container>
          <Row>
            <Col md={7}>
              <h2>Hey,</h2>
              <h1>I'm Sara Le Lait</h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Detail-Oriented Multi-tasker",
                    "Nature Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React JS</li>
              </ul>
            </Col>
          </Row>
        </Container>        
      </div>    
    )
  };
  
  export default Home;