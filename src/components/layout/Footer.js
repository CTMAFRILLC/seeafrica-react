import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import VolumeIcon from '../../assets/icons/png/Volume.png'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <ul className="footer__navLinks d-flex">
                        <li className="footer__navLink"><Link to={"/"} >support</Link></li>
                        <li className="footer__navLink"><Link to={"/about"} >about</Link></li>
                        <li className="footer__navLink"><Link to={"/"} >credits</Link></li>
                    </ul>
                    <div className="footer__navVolume">
                        <Link to={"#"}>
                            <img src={VolumeIcon} alt=""/>
                        </Link>
                        
                    </div>      
                </div>
            </div>
        </footer>
        )
    }
}
