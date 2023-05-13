import React from "react";
import { Container } from 'react-bootstrap';

const About = (props) => {
    return (
        <Container className='page-container'>
            <img className="profile-img"src="https://disperse-sjl.s3.us-east-2.amazonaws.com/Profile.jpg" alt="Sara Le Lait" />
            <h1>Sara Le Lait</h1>
            <h3>Software Developer</h3>
            <p>As a professional, I've had the opportunity to wear many hats, 
                from client management to leadership and of course, coding. 
                My passion lies in creating software that is not only functional but approachable. 
                I thrive in fast-paced environments and find joy in being creative and adaptive 
                when solving problems.
                I bring a unique blend of empathy, patience, and passion to every project I work on. 
                Understanding the needs of both clients and end-users is crucial to delivering 
                high-quality software solutions.</p>
                < br/>
                <p>I am always eager to learn and improve my skills, 
                and I am excited to contribute to the development of cutting-edge software that has 
                a meaningful impact. 
                Joining a dynamic team where I can utilize my skills and collaborate with others 
                is something I look forward to. 
                Together, we can create software that not only meets the needs of our clients 
                but exceeds their expectations.</p>
                < br/>
                <h6>See my full resume <a className='resume-link' href='https://github.com/sjlelait' 
                target='_blank'
                rel='noopener noreferrer'>HERE</a></h6>
        </Container>
    )
  };
  
export default About;