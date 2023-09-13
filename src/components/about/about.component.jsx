
import Typewriter from "typewriter-effect";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.styles.scss';

import { Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faTwitter, faInstagram , faGithub} from '@fortawesome/free-brands-svg-icons';

export const Bio = {
    roles: [
        "Web Developer",
        "Car Enthusiast",
        "Tennis Player",
        "Designer",
        "Astrophile"
    ]
};


const About =()=>{
    
    return(
        <div className='about-container'>
            <div className='about-text'>
                <h3>Hey There</h3>
                <h1 className = 'about'>I'm Leerish Arvind</h1>
                <Typewriter
                    options={{
                        strings:Bio.roles,
                        autoStart:true,
                        loop:true,
                    }}
                    
                />
                <Container>
                   <div className="icons d-flex justify-content-evenly">
                     <a   target="_blank" href="https://www.linkedin.com/in/leerish-arvind">
                        <FontAwesomeIcon icon ={faLinkedin} size="2xl" style={{color: "#f0d6b7",}}/>
                     </a>
                     <a  target="_blank" href="https://instagram.com/_.lee_10._?igshid=OGQ5ZDc2ODk2ZA==">
                        <FontAwesomeIcon icon ={faInstagram} size="2xl" style={{color: "#f0d6b7",}}/>
                     </a>
                     <a target="_blank" href="https://x.com/leerish_arvind?s=21&t=IiqEtSVK12gwwxfGD8JucQ">
                        <FontAwesomeIcon icon ={faTwitter} size="2xl" style={{color: "#f0d6b7",}}/>
                     </a>
                     <a target="_blank" href="https://github.com/Leerish">
                        <FontAwesomeIcon icon ={faGithub} size="2xl" style={{color: "#f0d6b7",}}/>
                     </a>
                   </div>
                </Container>
            </div>
        </div>
    );
};

export default About;


