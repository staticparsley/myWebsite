import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { TwitterTweetEmbed } from 'react-twitter-embed'

const AboutMe = () => (
    <div>
        <Segment >
            <p>
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
        <Header>Whiteboarding sucks</Header>

        <div style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%'
        }}>
            <TwitterTweetEmbed tweetId={'834146806594433025'} />
        </div>



    </div>

);

export default AboutMe;