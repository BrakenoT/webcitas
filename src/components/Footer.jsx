import React from "react";
import github from "../imgs/github-mark-white.png"
import linkedin from "../imgs/linkedin-logo-png-1853.png"
import gmail from "../imgs/logo-gmail-9984.png"

const Footer = () =>{
    return (
        <div className="footer">
            <div><a href="https://github.com/BrakenoT" ><img className="github" src={github}alt="Profile-Github" /></a></div>
            <div><a href="https://www.linkedin.com/in/brayan-herlan-villca/"><img className="linkedin" src={linkedin} alt="Profile-Linkedin" /></a></div>
            <div><a href="mailto:brayanvillca246@gmail.com"><img className="gmail" src={gmail} alt="Gmail" /></a></div>
        </div>
    )
}

export default Footer;