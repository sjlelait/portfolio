import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className='bg-dark text-white fixed-bottom'>
          <Container className='py-3 text-center'>
            <div className='icon-container'>
              <a href='https://www.linkedin.com/in/saralelait/' 
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://docs.google.com/document/d/159n7Miyf09AbafWpN35wPPPHh6WZMlSkJF03pfsyXZo/edit?usp=sharing' 
                target='_blank' 
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
              <a href='https://github.com/sjlelait' 
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>    
            <p>© 2023 Sara Le Lait</p>        
          </Container>
        </footer>
    )
  };
  
  export default Footer;