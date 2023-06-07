import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import Contact from './Components/Contact';
import Me from './Pages/Me';
import Works from './Components/Works';
import Service from './Pages/Service';
import Skills from './Pages/Skills';
import GifProfile from './Components/GifProfile';
import Skills2 from './Pages/Skills2';



class App extends React.Component{
  render(){
      return(
        <div>
          <Header/>
          <Me/>
          {/* <Skills/> */}
          <Skills2/>
          {/* <Service/> */}
          <Works/>
          <Contact/>
          </div>
      )
  }
}

export default App;
