import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,title,img,} = service;
    return (

      <Container className=" card-total">
        <Col className="ms-5" >
      <Card className="bg-light card-title border rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={img}/>
        <Card.Body className="text-center">
          <Card.Title><h6 className="fw-bold">{title}</h6></Card.Title>
          <Link to={`/apporment/${id}`}><Button variant="light" className="rounded fw-bold">View Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </Container>


 
    );
};

export default Service;