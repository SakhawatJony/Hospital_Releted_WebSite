import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';

const Cards = () => {

    const [experts,setExperts] = useState([])
      useEffect(()=>{
      fetch('./service.json')
      .then(res=>res.json())
      .then(data=>setExperts(data))


      },[])
   
    return (
        <div>
            <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">Our Services</h4>
            <Row xs={1} md={3} className="g-4 caed-container">   
            {
                experts.map(expert=><Card
                key={expert.id}
                expert={expert}
                ></Card>)
            }
            
           </Row>
            </Container>
            
        </div>
    );
};

export default Cards;