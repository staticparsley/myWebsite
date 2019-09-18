import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import './Content.css';

const AboutMe = () => (
    <div>
        <Container className="About">
             <Segment style={{marginTop: '10vh', }}>
            <p className="Bio">
                I'm a software engineer based out of New York City. Orignally from
                Los Angeles I moved out to the East Coast in pursuit of a better life
                and to get away from the vapid LA lifestyle. I specialize in the MERN
                stack but am well-versed in Java, Python, PHP, and SQL thanks to my
                previous experience as wel as my exposure to these technologies while
                studying computer science. When I'm not staring at code I can be found
                lifting weights, training Brazillian Jiu-Jitsu, playing guitar
                or just hanging out with my dog.
            </p>
        </Segment>
        </Container>
       
    </div>

);

export default AboutMe;