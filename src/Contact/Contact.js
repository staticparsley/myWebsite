import React, { Component } from 'react';
import gitLogo from './github.png';
import twitter from './twitter.png';
import linkedIn from './linkedin-logo.png';
import instagram from './instagram.svg';

import './Contact.css';


export class Contact extends Component {
    render() {
        return (


            
            <div className="contact-block">

                <a target="_blank" href="https://github.com/staticparsley">
                    <img src={gitLogo} className="link" />
                </a>
                <a target="_blank" href="https://twitter.com/staticparsley">
                    <img src={twitter} className="link2"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/rubenlmarin">
                    <img src={linkedIn} className="link3"/>
                </a>

                <a target="_blank" href="https://www.instagram.com/staticparsley">
                    <img src={instagram} className="link3"/>
                </a>
            </div>
        );
    }
}

export default Contact;