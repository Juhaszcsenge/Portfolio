import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import Contact from './Components/Contact';
import Me from './Components/Me';
import Works from './Components/Works';
import Service from './Pages/Service';


class App extends React.Component{
  render(){
      return(
        <Container className='container'>
          <Header/>
          <Me/>
          <Service/>
          <Works/>
          <Contact/>
        </Container>
       
      )
  }
}

export default App;
