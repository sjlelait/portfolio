import React from 'react';
import { Container, Carousel, Button, Row } from 'react-bootstrap';
import disperse from '../assets/disperse.png';
import onit from '../assets/onit.png';
import peculiar from '../assets/peculiar-charm.png';
import yadeeda from '../assets/ydSS.png';


const Projects = (props) => {
  return (
    <Container className='page-container'>
      <Row className='title-row'>
        <h2>Featured Projects</h2>
      </Row>
      < br />
      <Carousel className='carousel' interval='30000' variant='dark'>
        <Carousel.Item>
          <div className='image-container'>
            <img
              className='d-block mx-auto img-fluid projectImage'
              src={yadeeda}
              alt='Yadeeda'
            />
          </div>
          <Carousel.Caption>
            <h1 className='project-title'>Yadeeda</h1>
            <h5>A French learning website.</h5>
            <p>
              Modernized client's previous website using React to emphasize redirect to client’s YouTube Channel.
              Users can now view dynamic content from YouTube and view all albums with print-friendly song lyrics.
              Improved user engagement by incorporating visually appealing design elements with Canva and Tailwind
              that highlight the brand.
            </p>
            <div className='d-flex justify-content-center'>
              <Button
                variant='dark' size='sm'
                href='https://yadeeda.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginRight: '1rem' }}>Deployed App
              </Button>
              <Button
                variant='dark' size='sm'
                href='https://github.com/sjlelait/yadeeda'
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
              src={disperse}
              alt='Disperse'
            />
          </div>
          <Carousel.Caption>
            <h1 className='project-title'>Disperse</h1>
            <h5>A tool for wilderness lovers and adventurers.</h5>
            <p>
              Disperse allows users to login with Django's built-in authentication and manage their preferred camping spots.
              The application features a "find my location" option that integrates a comprehensive map showcasing the area.
              Disperse incorporates dynamic local weather data sourced from WeatherAPI and offers photo upload capabilities.
            </p>
            <div className='d-flex justify-content-center'>
              <Button
                variant='dark' size='sm'
                href='https://disperse.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginRight: '1rem' }}>Deployed App
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
              src={onit}
              alt='onit'
            />
          </div>
          <Carousel.Caption>
            <h1 className='project-title'>Onit</h1>
            <h5>A task management tool</h5>
            <p>
              A task Management tool for the go-getter who wants to maintain balance and self-care.
              Users will log-in through Google Firebase to create and manage their own personal to-do lists
              using full create, read, update, delete (CRUD) operations. Assumed the position of Lead Backend and Database Manager while actively
              contributing to front-end feature development.
            </p>
            <div className='d-flex justify-content-center'>
              <Button
                variant='dark' size='sm'
                href='https://onit-app.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginRight: '1rem' }}>Deployed App
              </Button>
              <Button
                variant='dark' size='sm'
                href='https://github.com/sjlelait/onit-frontend'
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
              src={peculiar}
              alt='Peculiar Charm'
            />
          </div>
          <Carousel.Caption>
            <h1 className='project-title'>Peculiar Charm</h1>
            <h5>A Gallery of the Unique and Odd.</h5>
            <p>
              A comprehensive full-stack application using Node.js, Express and MongoDB, encompassing
              all aspects of CRUD operations. The application provides secure login functionality that allows
              users to seamlessly access, modify, contrubute, and remove content within the collection.
            </p>
            <div className='d-flex justify-content-center'>
              <Button
                variant='dark' size='sm'
                href='https://peculiar-charm.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginRight: '1rem' }}>Deployed App
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