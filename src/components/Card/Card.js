import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = ({expert}) => {
   const {id,title,img} = expert;
    return (
        <div>
            <Container className=" card-total">
        <Col className="ms-5" >
      <Card className="bg-light card-title border rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Imge className="card-img" src={img}/>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Link to={`/apporment/${id}`}><Button variant="light" className="rounded fw-bold">View Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </Container>
            
        </div>
    );
};

export default Card;