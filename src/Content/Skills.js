import React from 'react';
import { Grid, Icon, List, Container } from 'semantic-ui-react';
import './Content.css';

const skillList = ['Javascript', 'NodeJS','React', 'Python', 'AWS', 'Linux SysAdmin,','Express', 'HapiJS', 'MongoDB', 'PostgreSQL'];

const Skills = () => (
    <div>
        <Container className="Skills">
            <Grid columns={3} stackable>
                <Grid.Column><Icon name="js" size="massive" /></Grid.Column>
                <Grid.Column><Icon name="node" size="massive" /></Grid.Column>
                <Grid.Column><Icon name="react" size="massive" /></Grid.Column>

            </Grid>
            <Grid columns={3} stackable>
                <Grid.Column><Icon name="python" size="massive" /></Grid.Column>
                <Grid.Column><Icon name="aws" size="massive" /></Grid.Column>
                <Grid.Column><Icon name="linux" size="massive" /></Grid.Column>
            </Grid>

            <List animated verticalAlign>
                {skillList.map(item => {
                    return(
                        <List.Item>
                            <List.Content>
                                <List.Header>{item}</List.Header>
                            </List.Content>
                        </List.Item>
                    ) 
                })}
            </List>
            
        </Container>
    </div>
);

export default Skills;