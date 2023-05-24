import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FiArrowRightCircle } from 'react-icons/fi';
import GifProfile from '../Components/GifProfile';
// import './App.css';



export default function Me() {

 const [loopNum, setLoopNum] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);
 const toRotate = ["Web Developer", "Web Designer", "UI/UX Ddesigner"];
 const [text, setText] = useState("");
 const [delta, setDelta] = useState(300- Math.random() * 100);
 const period = 2000;

 useEffect(() => {
   let ticker = setInterval(() => {
    tick();
   },delta)

   return () => {clearInterval(ticker)};
 }, [text])

 const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1); 
 
  setText(updateText);

  if(isDeleting){
    setDelta(prevDelta => prevDelta /2)
  }

  if(!isDeleting && updateText === fullText){
    setIsDeleting(true);
    setDelta(period);
  }
  else if(isDeleting && updateText === ''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
  }


}


const downloadCV = () => {
  window.open('/Önéletrajz.pdf'); // Az elérési útvonal a CV fájlhoz
};

  return (
    <section className='me' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7} className='order-1 order-md-1'>
            <h1>{"Hi I'm Juhász Csenge "}<span className='wrap'></span></h1>
            <h4 style={{color: "white"}}>Desarrollador frontend creativo y apasionado que trabaja para ofrecer
          soluciones digitales únicas y emocionantes que brindan una experiencia
          excepcional a los usuarios.</h4>
          <div className='btn_cv'>
          <div>
          <Button className="btn" style={{ fontSize: '30px', padding: '10px 20px'}} onClick={downloadCV}>CV letöltés</Button>
          </div>
          </div>
            {/* <button onClick={() => console.log('connect')}>Let's connect<FiArrowRightCircle size={25} /></button> */}
          </Col>
          <Col xs={12} md={6} xl={5} className='order-2 order-md-2'>
            {/* <img src='/cv kep.jpg' alt='img' /> */}
            <GifProfile/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
