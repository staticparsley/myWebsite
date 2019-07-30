import React from 'react';

import { Header, Icon, Segment } from 'semantic-ui-react';

const Contact = () => (
    <Segment raised>
        <Header>You can find me at the links below</Header>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rubenlmarin/"><Icon name="linkedin" size="big" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/staticparsley"><Icon name="github square" size="big" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/staticparsley"><Icon name="twitter square" size="big" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/staticparsley"><Icon name="instagram" size="big" /></a>
    </Segment>
)

export default Contact;