import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar.scss'
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import Me from './Pages/Me';
import GifProfile from './Components/GifProfile';
import Skills2 from './Pages/Skills2';
import  Navbar from './Components/Navbar'
import Projects from './Pages/Projects';
import Contact from './Contact/Contact';



class App extends React.Component{
  render(){
      return(
        <div>
          {/* <Header/> */}
          <Navbar />
          <Me/>
          {/* <Skills/> */}
          <Skills2/>
          <Projects/>
          {/* <Service/> */}
          {/* <Works/> */}
          <Contact />
          </div>
      )
  }
}

export default App;
