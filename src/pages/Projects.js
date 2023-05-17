import React from 'react';
import { Container, Carousel, Button, Row } from 'react-bootstrap';

const Projects = (props) => {
    return (
      <Container className='page-container'>
        <Row className='title-row'>
        <h1>Featured Projects</h1>
        </Row>
        < br/>
        <Carousel className='carousel' interval='9000' variant='dark'>
          <Carousel.Item>
            <div className='image-container'>
              <img
                className='d-block mx-auto img-fluid projectImage'
                src='https://github.com/sjlelait/disperse/raw/main/media/spot_images/detail.png'
                alt='Disperse'
              />
            </div>
            <Carousel.Caption>
              <h2>Disperse</h2>
              <h6>A full-stack Django App for wilderness lovers and adventurers.</h6>
              <p>
                User's can login with Django's built-in authentication to keep track of 
                their favorite camping sites. 
                Disperse features a "find my location" option that aides in displaying a map of the area.
                Other features include local weather data fetched from WeatherAPI 
                and photo upload capabilities.
              </p>
              <div className='d-flex justify-content-center'>
                <Button
                  variant='dark' size='sm' 
                  href='https://disperse.herokuapp.com/'
                  target='_blank' 
                  rel='noopener noreferrer'
                  style={{marginRight: '1rem'}}>Deployed App
                </Button>
                <Button
                  variant='dark' size='sm' 
                  href='https://github.com/sjlelait/disperse'
                  target='_blank' 
                  rel='noopener noreferrer'>GitHub
                </Button>
              </div>              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='image-container'>
              <img
                className='d-block mx-auto img-fluid projectImage'
                src='https://i.imgur.com/LDxH1yo.png'
                alt='onit'
              />
            </div>
            <Carousel.Caption>
              <h2>onit</h2>
              <h6>A collaborative project:</h6>
              <p>
                A task Management tool for the go-getter who wants to maintain balance and self-care.
                Users will log-in through Google Firebase to create and manage their own personal to-do lists 
                using full CRUD operations. I assumed the position of Lead Backend and Database Manager while also
                contributing to front-end feature development.
              </p>
              <div className='d-flex justify-content-center'>
                <Button
                  variant='dark' size='sm' 
                  href='https://onit-notes.netlify.app/'
                  target='_blank' 
                  rel='noopener noreferrer'
                  style={{marginRight: '1rem'}}>Deployed App
                </Button>
                <Button
                  variant='dark' size='sm' 
                  href='https://git.generalassemb.ly/smedina2494/onit-backend'
                  target='_blank' 
                  rel='noopener noreferrer'>GitHub
                </Button>
              </div>              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='image-container'>
              <img
                className='d-block mx-auto img-fluid projectImage'
                src='https://github.com/sjlelait/peculiar-charm/raw/main/Markdown/Peculiar%20Charm%20Index.png'
                alt='Peculiar Charm'
              />
            </div>
            <Carousel.Caption>
              <h2>Peculiar Charm</h2>
              <h6>A Gallery of the Unique and Odd.</h6>
              <p>
                A comprehensive full-stack application using Node.js, Express and MongoDB, encompassing 
                all aspects of CRUD operations. This application empoweres users with secure login functionality
                to seamlessly access, modify, contrubute to, and remove content within the collection.
              </p>
              <div className='d-flex justify-content-center'>
                <Button
                  variant='dark' size='sm' 
                  href='https://peculiar-charm.herokuapp.com/'
                  target='_blank' 
                  rel='noopener noreferrer'
                  style={{marginRight: '1rem'}}>Deployed App
                </Button>
                <Button
                  variant='dark' size='sm' 
                  href='https://github.com/sjlelait/peculiar-charm'
                  target='_blank' 
                  rel='noopener noreferrer'>GitHub
                </Button>
              </div>           
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </Container>
    )
  };
  
export default Projects;