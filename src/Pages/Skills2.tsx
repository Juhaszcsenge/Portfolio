import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { MotionConfig, motion } from 'framer-motion';
import { styles } from '../Styles';

export default function Skills2() {
  return (
    <section id="Skills" style={{ color: "white" }}>
        <div className='w-full_flex' style={{ position: 'relative', padding: "20px"}}>
        <Row className='align-items-center' style={{marginRight: "100px"}}>
        <Col  md={6}  >
        </Col>
        </Row>
       </div>
      <Container>
      <Row className='align-items-center' style={{marginRight: "110px", padding: "10px", color:"white"}}>
        <Col  md={6} >
        <h2>My skills</h2>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl ' style={{fontSize: "20px",  textAlign: "center", color: "white"}}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        </Col>
        </Row>
      
      <div className='container experience_container' >
        <Row>
          <Col lg = {6}>
            <div className='experience_frontend' style={{color: "white"}}>
              <h3>Frontend developer</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <img src='/html.png' className='experience_details-icon' style={{ width: '50px', height: '50px' }} alt='Html' />
                  <div>
                    <h4>Html</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details' >
                    <img src='/css.svg'  className='experience_details-icon' style={{ width: '50px', height: '50px' }} alt='Css' />
                    <div>
                        <h4>Css</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className='experience_details'>
                    <img src='/javascript.svg'  className='experience_details-icon' style={{ width: '50px', height: '50px' }} alt='Javascript' />
                    <div>
                        <h4>Javascript</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className='experience_details'>
                    <img src='/bootstrap-logo.svg'  className='experience_details-icon' style={{ width: '50px', height: '50px' }} alt='Bootstrap' />
                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className='experience_details'>
                    <img src='/reactJs.svg'  className='experience_details-icon' style={{ width: '50px', height: '50px' }} alt='React' />
                    <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                    </article>
                    <article className='experience_details'>
                    <img src='/typeScript.svg' className='experience_details-icon' style={{ width: '50px', height: '50px' }}  alt='Typescript'/>
                    <div>
                        <h4>Typescript</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                    </article>
              </div>
            </div>
          </Col>
          </Row>
          <Row>
          <Col lg = {6}>
            <div className='experience_backend' style={{color: "white"}}>
              <h3>Backend Developer</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <img src="/nestjs.svg" className="experience_details-icon" alt="postgresql" />
                  <div>
                    <h4>PostgreSQL</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                    <article className="experience_details">
                    <img src="/typeScript.svg" className="experience_details-icon" alt="ruby" />
                    <div>
                        <h4>Ruby</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <img src="/nodejs.webp" className="experience_details-icon" alt="rails" />
                    <div>
                        <h4>Ruby on Rails</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <img src="/mysql.png" className="experience_details-icon" alt="python" />
                    <div>
                        <h4>Python</h4>
                        <small className="text-light">Beginner</small>
                    </div>
                    </article>
              </div>
            </div>
          </Col>
          </Row>
      </div>
      </Container>
      <hr className="separator" 
       style={{
        width: "50%",
        margin: "140px auto",
        border: "none",
        borderTop: "4px solid",
        padding: "10px 0",
        color: "#e055d9",
        opacity: "1",
      }} />
    </section>
  );
}
