import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faLinkedin,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function MyFooter () {
        return (
            <div style={{ display:'flex', justifyContent:'center' }} >
                <footer className='footer'>
                <hr style={{ borderTop: "1px light blue", width: "40vw" ,paddingTop: "1.5em"}} />
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/kostas2019/"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faLinkedin}>
                            </FontAwesomeIcon >   </a>
                        {/* github */}
                        <a href="https://github.com/kosta88"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faGithubAlt}>
                            </FontAwesomeIcon >    </a>
                        {/*facebook */}
                        <a
                            href="https://www.facebook.com/kostiask"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faFacebook}>
                            </FontAwesomeIcon >    </a>
                    </div>
                    {/* <p class="copyright">Company Name © 2018</p> */}
                </footer>
            </div >
        );
}

