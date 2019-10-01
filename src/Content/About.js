import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';
import image from '../profile.png';
import './Content.css';

const AboutMe = () => (
    <div>
        <Container className="About">
             <Segment style={{marginTop: '10vh', }}>
                <Image src={image} size='medium'  className="profile" />
            <p className="Bio">
                I'm a software engineer based out of New York City. Orignally from
                Los Angeles I moved out to the East Coast in pursuit of a better life
                and escape the vapid LA lifestyle. I specialize in the MERN
                stack but am well-versed in Java, Python, and SQL thanks to my
                previous experience as well as my exposure to these technologies while
                studying computer science. When I'm not staring at code I can be found
                lifting weights, training Brazillian Jiu-Jitsu,
                or hanging out with my dog.
            </p>
        </Segment>
        </Container>
       
    </div>

);

export default AboutMe;