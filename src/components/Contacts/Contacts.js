import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
              <div className="container text-center">
            <h4 className="fw-bold mt-3 pt-3 pb-5">Contact Us</h4>
            <Row className="text-left">
          <Col xs={6} md={6} className="" >
              <h3 className="text-info">Get Intouch</h3>
           <p>Have a question or just want to say hi? We'd love to hear from you.</p>
           <div className="container justify-content-start align-items-start">
               <Row>
              <Col>  <input type="text" placeholder="Your Name"  className="d-flex mt-3 bg-light"/></Col>
              <Col>  <input type="email" placeholder="Your Email" className=" d-flex mt-3 bg-light rounded" /></Col>
              </Row>
           <input type="text" placeholder="Subject" className="w-100 mt-3 bg-light" />
           <textarea rows="8"  placeholder="Message" className="w-100 mt-3 bg-light rounded" required></textarea>
           <button type="submit" className="d-flex bg-lightgrey rounded mb-5 "> Send Message</button>
           </div>
   
       
          </Col>
          <Col  xs={6} md={6}  className="shadow-lg p-5 mb-5 bg-light rounded" >
           
           <div className="d-flex">
           
           <i className="m-2"><FontAwesomeIcon icon={faMapMarkedAlt} /></i>
         <span>
    <h6>XYZ Road, ABC Building</h6>
    <p>Feni,Dhaka, Bangladesh</p>
         </span>
    </div>
<div className="d-flex" >
<i className="m-2"><FontAwesomeIcon icon={faPhone} /></i>
     <span>
<h5>+88 01927415399</h5>
<p>Monday to Saturday, 10AM to 6PM</p>

     </span>
</div>
<div className="d-flex col-sm-6">
<i className="m-2"><FontAwesomeIcon icon={faEnvelope} /></i>
     <span>
<h6> drinkhospital@gmail.com</h6>
<p>Email us your query</p>
     </span>
     </div>
          </Col>
        </Row>
        </div>
    );
};

export default Contacts;