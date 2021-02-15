import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faLinkedin,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';


class MyFooter extends Component {
    render() {
        return (
            <div style={{ display:'flex', justifyContent:'center' }} >
                <footer className='footer'>
                <hr style={{ borderTop: "1px light blue", width: "40vw" ,marginTop: "2.5em"}} />
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/kostas2019/"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faLinkedin}>
                            </FontAwesomeIcon >
                        </a>

                        {/* github */}
                        <a href="https://github.com/kosta88"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faGithubAlt}>
                            </FontAwesomeIcon >
                        </a>

                        {/*facebook */}
                        <a
                            href="https://www.facebook.com/kostiask"
                            rel="noopener noreferrer"
                            target="_blank"  >
                            <FontAwesomeIcon size='2x' icon={faFacebook}>
                            </FontAwesomeIcon >
                        </a>
                    </div>


                    {/* <div class="social">
                        <a href="#"><i class="icon ion-social-instagram"></i></a>
                        <a href="#"><i class="icon ion-social-snapchat"></i></a>
                        <a href="#"><i class="icon ion-social-twitter"></i></a>
                        <a href="#"><i class="icon ion-social-facebook"></i></a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">Company Name © 2018</p> */}
                </footer>
            </div >
        );
    }
}

export default MyFooter;