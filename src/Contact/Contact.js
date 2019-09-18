import React from 'react';

import { Icon, Segment, Grid, Container } from 'semantic-ui-react';

import './Contact.css';

const Contact = () => (
    <Container>
        <Segment raised style={{ marginTop: '30vh'}}>
        <p className="Contact">You can find me at the links below</p>
        <Grid columns={4} stackable>
            <Grid.Column>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rubenlmarin/"><Icon name="linkedin" size="huge" /></a>
            </Grid.Column>
            <Grid.Column>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/staticparsley"><Icon name="github square" size="huge" /></a>
            </Grid.Column>
            <Grid.Column>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/staticparsley"><Icon name="twitter square" size="huge" /></a>
            </Grid.Column>
            <Grid.Column>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/staticparsley"><Icon name="instagram" size="huge" /></a>
            </Grid.Column>
        </Grid>
    </Segment>
    </Container>
    
)

export default Contact;