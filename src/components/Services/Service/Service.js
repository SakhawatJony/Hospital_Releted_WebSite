import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const {id,title,img,description} = props.services;
  return (
    <div>
      <Container className="card-total">
        <Col>
      <Card className="bg-light card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={img}/>
        <Card.Body className="text-right">
          <Card.Title><h6>{title}</h6></Card.Title>
          <Card.Text>
            {description.slice(0,30)}
          </Card.Text>
          <Link to={`/apporment/${id}`}><Button variant="outline-success " size="sm" className="rounded fw-bold btn">View Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </Container>
        <div>

        </div>
    </div>
  );
};

export default Service;