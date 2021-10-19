import React, { useState,useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
const About = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
      fetch('./service.json')
      .then(res=>res.json())
      .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <div className="container text-center">
            <h4 className="fw-bold pt-3 pb-5">About Us</h4>
            <Row className="">
            <Col  xs={6} md={6}><Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" thumbnail />
          </Col>


          <Col xs={6} md={6}>
              <h3> Our  Drink Hospital Ltd </h3>
           <p>Drink Hospital Ltd has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
            <Button className="bg-info text-white p-2 fw-bold rounded-pill"size="lg">
Expoler Now 
    </Button>
          </Col>
         
        </Row>
        <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">Our Experts Doctors</h4>
            <Row xs={1} md={3} className="g-4 caed-container">   
            {
              doctors.map(doctor=><Doctor
              doctor={doctor}
              ></Doctor>)
            }
           </Row>
            </Container>
        </div>
        </div>
    );
};

export default About;