import React, { Component } from 'react';
import image from './ProfilePic.png';
import { Image, Header } from 'semantic-ui-react';
import './App.css';
import Contact from './Contact/Contact';
import About from './Content/About';
import Skills from './Content/Skills';
import Experience from './Content/Experience';
import { Parallax } from 'react-parallax';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={require('./IMG_4922.jpg')}
            bgImageAlt="main"
            strength={-250}
          >
            <Header dividing style={{ color: "white", marginTop: '50vh', fontSize: '10vh', marginleft: 'auto', marginRight: 'auto' }}>Ruben Marin</Header>
          <Header style={{ color: "white", fontSize: '2vh', marginleft: 'auto', marginRight: 'auto' }}>Software Engineer - Full Stack Developer</Header>

            <div style={{ height: '30vh' }} />
          </Parallax>
          <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={require('./nyc3.jpg')}
            bgImageAlt="city"
            strength={-600}
          >
            <Header style={{ color: "white", width: '50%', marginTop: '12vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '10vh' }}>About</Header>
            {/* <Image src={image} size='medium' circular className="profile"/> */}
            <About />
            <div style={{ height: '20vh', marginTop: '0', padding: '0' }} />
          </Parallax>
          <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={require('./graffitti.jpg')}
            bgImageAlt="taggin"
            strength={-600}
          >
            <Header style={{ color: "white", width: '50%', marginTop: '12vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '10vh' }}>Skills</Header>
            <Skills />
            <div style={{ height: '20vh' }} />
          </Parallax>
          <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={require('./code.jpg')}
            bgImageAlt="code"
            strength={-600}
          >
            <Header style={{ color: "white", width: '50%', marginTop: '12vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '10vh' }}>Work</Header>
            <Experience />
            <div style={{ height: '20vh' }} />
          </Parallax>
          <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={require('./nyc.jpg')}
            bgImageAlt="last"
            strength={-200}
          >
            <Header style={{ color: "white", width: '50%', marginTop: '12vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '10vh' }}>Contact</Header>
            <Contact />
            <div style={{ height: '10vh' }} />
          </Parallax>
      </div>
    );
  }
}

export default App;
