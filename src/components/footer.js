import React from 'react';
import '../css/footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-uls">
                <ul className="footer-ul">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="footer-ul-li">
                    <li>Africa</li>
                    <li>America</li>
                    <li>Europe</li>
                </ul>
            </div>
            <p>&copy;Zatec 2021</p>
        </div>
     );
}
 
export default Footer;