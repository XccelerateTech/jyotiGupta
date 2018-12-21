import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
    <nav className="ui secondary menu">
    <Link className="item" to="/Location">Location </Link>
    <Link className="item" to="/Facebook" >Facebook </Link>
    <Link className="item" to="/ContactUs">Contact Us</Link>
    </nav>        
    )
}

export default Footer;