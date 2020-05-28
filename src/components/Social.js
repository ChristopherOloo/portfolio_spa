import React , { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCodepen,
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin
    
  } from "@fortawesome/free-brands-svg-icons";

class Social extends Component{

    render() {

        return (

            <div class="social">

            <a href="https://codepen.io/ChristopherOloo" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i>
            <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>

            <a href="https://github.com/ChristopherOloo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a href="https://www.instagram.com/chris__oloo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a href="https://twitter.com/OlooOgude" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a href="www.linkedin.com/in/christopher-ogude-9a3881181" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            </div>

        )

    }

}

export default Social;