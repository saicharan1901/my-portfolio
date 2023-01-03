import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

import "./footer.css"

export default function SocialFollow() {
  const year = new Date().getFullYear();
  return (
    
    <div className="social-container">
      <div className="social">
      </div>


      <a href="https://www.linkedin.com/in/sai-charan-226857248/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a> &nbsp;&nbsp;&nbsp;
      <a href="https://github.com/saicharan1901"
        className="instagram social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>


            <div className="copy">
                <p>Copyright ⓒ {year} Designed by P Sai Charan</p>
            </div>

    </div>
  );
}