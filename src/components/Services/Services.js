import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    
const [services,setServices] =useState([]);


    useEffect(()=>{
    fetch('./service.json')
    .then(res => res.json())
    .then(data=>setServices(data))


    },[])
    return (
        <div>
           
            <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">Our Services</h4>
            <Row xs={1} md={3} className="g-4 caed-container">   
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </Row>
            </Container>
        </div>
    );
};

export default Services;