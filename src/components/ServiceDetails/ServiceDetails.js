import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    // const {id,title,img} = props.expert;
    return (
        <div>
            <Container className=" card-total">
        <Col className="ms-5" >
      <Card className="bg-light card-title border rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Imge className="card-img" src/>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold"></Card.Title>
          <Link to={`/apporment/$`}><Button variant="light" className="rounded fw-bold">View Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </Container>
            
        </div>
    );
};

export default ServiceDetails;