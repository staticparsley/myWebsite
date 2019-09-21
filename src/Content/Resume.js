import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import resume from './RubenMarin_resume.pdf';

const ResumeSection = () => (
    <div style={{marginTop: '5vh', paddingBottom: '2vh'}}>
        
            <Header>Click here for my resume</Header>
            <form method="get" action={resume}>
                <Button primary>Resume</Button>
            </form>
   
        
    </div>
);

export default ResumeSection;
