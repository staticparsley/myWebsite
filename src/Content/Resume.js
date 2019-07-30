import React from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import resume from './RubenMarin_resume.pdf';

const ResumeSection = () => (
    <Segment raised>
        <Header>Click here for my resume</Header>
        <form method="get" action={resume}>
            <Button primary>Resume</Button>
        </form>
    </Segment>
);

export default ResumeSection;