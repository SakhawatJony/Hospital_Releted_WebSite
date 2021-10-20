import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [servicess,setServicess] = useState([]);


    useEffect(()=>{
        fetch('./Experts.JSON')
        .then(res=>res.json())
        .then(data=>setServicess(data))


    },[])
    return (
        <div>
             <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">Our Services</h4>
            <Row xs={1} md={3} className="g-4 caed-container">   
          {
            servicess.map(services=> <Service
            key={services.id}
            services={services}
            
            ></Service>)  
          }
           </Row>
            </Container>
        </div>
    );
};

export default Services;