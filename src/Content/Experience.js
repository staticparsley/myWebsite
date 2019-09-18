import React from 'react';
import { Grid, Icon, Header, Segment, Container } from 'semantic-ui-react';
import './Content.css';
import Resume from './Resume';

const Experience = () => (
    <div>
        <Container raised className="Experience">
            <Header style={{ color: "black", width: '50%', marginTop: '12vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '5vh' }}>Experience</Header>
            <Grid columns={3} stackable>
                <Grid.Column>
                    <Header>Tendigi - Web Developer</Header>
                    <p>October 2018 - August 2019</p>
                </Grid.Column>
                <Grid.Column>
                    <Header>CSULB - JavaScript Developer</Header>
                    <p>May 2017 - January 2018</p>
                </Grid.Column>
                <Grid.Column>
                    <Header>HSI STEM - PHP Developer</Header>
                    <p>June 2015 - October 2016</p>
                </Grid.Column>
            </Grid> 
            <Segment className="Experience">
        <Header style={{ color: "black", width: '50%', marginTop: '1vh', marginLeft: 'auto', marginRight: 'auto', fontSize: '5vh' }}>Education</Header>
                <Icon name="graduation cap" />B.S in Computer Science - California State University, Long Beach - Graduated May 2018</Segment>

            <Resume />
        </Container>

        
     
        
    </div>
);

export default Experience;