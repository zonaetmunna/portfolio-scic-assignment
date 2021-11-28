import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';

const Banner = () => {
     return (
          <div>
               <Container>
                    <Row className="d-flex justify-center align-items-center">
                         <Col sm={12} md={6}>
                              <h2>Hello i am zonaet</h2>
                              <h5>Creative Developer</h5>
                              <Button variant="primary">My-Resume</Button>{' '}
                         </Col>
                         <Col sm={12} md={6}>
                              <Image width="400px" className="w-75 mt-3" src="https://i.ibb.co/qrRhjtk/83024583.jpg" roundedCircle />
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Banner;