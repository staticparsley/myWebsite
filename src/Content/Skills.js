import React from 'react';
import { Grid, Icon, Header, Segment } from 'semantic-ui-react';

const Skills = () => (
    <div>
        <Header>Skills:</Header>
        <Segment raised>
            <Grid columns={6}>
                <Grid.Column><Icon name="js" size="huge" /></Grid.Column>
                <Grid.Column><Icon name="node" size="huge" /></Grid.Column>
                <Grid.Column><Icon name="react" size="huge" /></Grid.Column>
                <Grid.Column><Icon name="python" size="huge" /></Grid.Column>
                <Grid.Column><Icon name="aws" size="huge" /></Grid.Column>
                <Grid.Column><Icon name="linux" size="huge" /></Grid.Column>
            </Grid>
        </Segment>
        <Header>Experience:</Header>
        <Segment raised>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <Header>Tendigi - Web Developer</Header>
                    <p>October 2018 - Current</p>
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
        </Segment>
        <Header>Education:</Header>
        <Segment raised>B.S in Computer Science - California State University, Long Beach <Icon name="graduation cap" />Graduated May 2018</Segment>
    </div >

);

export default Skills;