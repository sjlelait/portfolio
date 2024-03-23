import React from 'react';
import { Button, Container } from 'react-bootstrap';
import profile from '../assets/profile-img.jpg';

const About = (props) => {
    return (
        <Container className='page-container'>
            <img className='profile-img' src={profile} alt="Sara Le Lait" />
            <h1>Sara Le Lait</h1>
            <h3 className='about-p'>Software Developer</h3>
            <p className='about-p'>
                As a professional, I've had the opportunity to wear many hats,
                from client management to leadership and of course, coding.
                My passion lies in creating software that is not only functional but approachable.
                By intertwining artistic vision with a minimalist approach, I strive to create user-friendly
                experiences marked by simplicity.
                Thriving in fast-paced environments, I find joy in being creative and adaptive
                when solving problems.
                A unique blend of empathy, patience, and zeal follows me into every project I work on.
                This helps me to deliver high-quality software solutions the meet the needs of both
                clients and end users.
            </p>
            <p className='about-p'>
                I am always eager to learn and improve my skills,
                and I am excited to contribute to the development of cutting-edge software that has
                a meaningful impact.
                I look forward to joining a dynamic team where I can utilize my skills and collaborate with others.
                Together, we can create software that not only meets the needs of our clients
                but exceeds their expectations.
            </p>
            < br />
            <h5>See my full resume{' '}
                <Button
                    variant='dark' size='sm'
                    href='https://docs.google.com/document/d/159n7Miyf09AbafWpN35wPPPHh6WZMlSkJF03pfsyXZo/edit?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'>HERE
                </Button>
            </h5>
        </Container>
    )
};

export default About;