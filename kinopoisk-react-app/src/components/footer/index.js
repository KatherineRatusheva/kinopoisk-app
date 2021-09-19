import React from 'react';
import './index.css'

const Footer = () => {
    
    return (  
        <div className='footer'>
            <ul className='footer-link'>
                <a href="#"><li href="#" className='footer-link-instagram'></li></a>
                <a href="#"><li href="#" className='footer-link-fb'></li></a>
                <a href="#"><li href="#" className='footer-link-vk'></li></a>
                <a href="#"><li href="#" className='footer-link-twitter'></li></a>
                <a href="#"><li href="#" className='footer-link-youtube'></li></a>
            </ul>
        </div>
    )
}

export default Footer;