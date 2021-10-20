
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Apporment = () => {
    const {serviceId} = useParams();
    const [crouses,setCrouses] =useState([]);


    useEffect(()=>{
    fetch('/service.json')
    .then(res => res.json())
    .then(data=>setCrouses(data))
    },[])


    const matchingCrouses = crouses.find(crouse => crouse.id === Number(serviceId));

    return ( 
    <div className="my-4">
      {matchingCrouses?.title?(
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingCrouses.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{matchingCrouses.title}</h2>
              <h5>{matchingCrouses.description}</h5>
              <Link to="/login"><Button variant="secondary" size="sm">
              Appointment Now
    </Button></Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Course Found</h1>
        </div>
      )}
    </div>
    );
};

export default Apporment;