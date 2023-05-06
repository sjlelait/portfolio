import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Projects = (props) => {
    return (
      <Container className='projectCarousel'>
        <Carousel className='carousel'>
          <Carousel.Item>
            <div className='image-container'>
              <img
                className='d-block mx-auto img-fluid projectImage'
                src='https://github.com/sjlelait/disperse/raw/main/media/spot_images/detail.png'
                alt='Disperse'
              />
            </div>
            <Carousel.Caption>
              <h3>Disperse</h3>
              <p>
                A full-stack Django App for wilderness lovers and adventurers. 
                User's can login with Django's built-in authentication to keep track of 
                their favorite camping sites. 
                Disperse features a "find my location" option that aides in displaying a map of the area.
                Other features include local weather data fetched from WeatherAPI 
                and photo upload capabilities.
              </p>
              <a href='https://disperse.herokuapp.com/'>See the Deployed App</a>
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
              <h3>onit</h3>
              <p>
                A task Management tool for the go-getter who wants to maintain balance and self-care.
                Users will log-in through Google Firebase to create and manage their own personal to-do lists 
                using full CRUD operations.
              </p>
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
              <h3>Peculiar Charm</h3>
              <p>
                A Gallery of the Unique and Odd. 
                User can login to view, edit, contribute to or delete pieces in the collection.
              </p>
              <a href='https://peculiar-charm.herokuapp.com/'>See the Deployed App</a>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </Container>
    )
  };
  
export default Projects;