import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

import Social from "../components/Social";
import profilepic from "../img/my_pic.jpg";


class Home extends Component {

    render() {

        return (

            <div classNames ="condiv home">

            <br/>

            <img src={profilepic} alt="Me" className="profilepic"></img>

            <p><ReactTypingEffect className="typingeffect" text={['I am Christopher Oloo Ogude', 'I am software developer']}
            speed={100} eraseDelay={700} /></p>
            
            <Social/>

            </div>

        )

    }

}

export default Home;