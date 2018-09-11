import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {particlesOptions} from './Options';
import '../App.css';



class Banner extends Component {
    render() {
      return (
        <Particles className='particles'
          params={particlesOptions}
        />
      );
    }
  }
  
  export default Banner;