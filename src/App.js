import React, { Component } from 'react';

import Banner from './Banner/Banner';
import image from './ProfilePic.png';
import { Image, Header, Container, Segment } from 'semantic-ui-react';
import './App.css';
import Tabs from './Content/Tab';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Banner />
        <Image src={image} size='medium' circular className="profile" />

        <Container>
          <Segment className="Segment">
            <Header size="huge" dividing>Ruben Marin</Header>
            <Header block>NOTE: Site is under construction</Header>
            <Tabs />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
