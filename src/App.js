import React, { Component } from 'react';
import logo from './logo.svg';

import Banner from './Banner/Banner';
import Content from './Content/Content';
import Contact from './Contact/Contact';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import 'bootstrap/dist/css/bootstrap.css';
import image from './image.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
         <Banner />
         
         <Image src={image} responsive thumbnail className="profile-photo"/>;

         

        <Content />
        
        

       
      </div>
    );
  }
}

export default App;
