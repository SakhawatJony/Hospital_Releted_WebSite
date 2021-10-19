import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {imges,name,title} = doctor;
    return (
        <div>
            <Container>
        <Col>
      <Card className="bg-light card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={imges}/>
        <Card.Body className="text-right">
          <Card.Title><h6>{name}</h6></Card.Title>
          <Card.Text>
          <p className="">{title} <span>specialist</span></p>
          </Card.Text>
          <Button variant="lightgrey" className="rounded fw-bold text-dark bg-warning ">Contact Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </Container>
        </div>
    );
};

export default Doctor;