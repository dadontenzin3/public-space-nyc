import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


function Home() {
  const [text, setText] = useState('');
  const originalText = 'Discover, Explore, Repeat.';

  useEffect(() => {
    animateText(originalText, setText, 100);
  }, []);

  const animateText = (originalText, setText, delay) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  };

  return (
    <Container fluid style={{ fontSize: '30px' }}>
      <Row>
        <Col md={6}>
          <Stack gap={4} className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <h1 className="p-2">{text}</h1>
            <h2 className="p-2">Connecting New Yorkers with the perfect public park for their adventures.</h2>
          </Stack>
        </Col>
        <Col>
          <Stack gap={4} className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <div className="p-2">Step 1: Customize your public park search.</div>
            <div className="p-2">
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '5px' }} />
            </div>
            <div className="p-2">Step 2: Explore New York City's extensive public park listings.</div>
            <div className="p-2">
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '5px' }} />
            </div>
            <div className="p-2">Step 3: Visit a park.</div>
            <div className="p-2">
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '5px' }} />
            </div>
            <div className="p-2">Step 4: Leave a review.</div>
            <div className="p-2">
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '5px' }} />
            </div>
            <div className="p-2">Step 5: Repeat.</div> 
            <div className="p-5"><Button variant="primary" size="lg" href="/browse">Get Started</Button></div>   
        </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

