import React, { Component } from 'react';

import Contact from '../Contact/Contact';
import resume from './RubenMarin_resume.pdf';
import {Button,Alert} from 'react-bootstrap/lib/';

import '../App.css';


class  Content extends Component {
    render() {
      return (
        
        <div className="Content">

        
            <div className="center" >
                <h1 className="App-title">Ruben Marin</h1>
             </div>

            <div className="center">
                <p className="App-intro">
                    <code>My awesome website is currently under construction...</code>
                </p>
            </div>

            <div className="status">

                <Alert bsStyle="danger">
  <strong>Current Status:</strong> Crying over the difficult job hunt :(
</Alert>

            </div>

            <div className="resume">
                <p>
                    <code>You can download my resume here:</code>
                </p>
                
                
                <form method="get" action={resume}>
                    <Button type="submit" >Resume</Button>
                </form>
            </div>

            <div>
                <p className="App-intro">
                    <code>You can also view me at the links below:</code>
                </p>
            </div>
            <Contact />
        </div>


        
      );
    }
  }
  
  export default Content;