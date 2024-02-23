import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <img
        className="footer-demo-bg"
        src={require('../resources/image8_crop1.jpeg')}
        alt="People dancing to drum beats."
      />
      <div className='footerContent'>
        <div className='links' >
          <h3>Follow us:</h3>
          <div className='socialLinks'>
            <a className='socialLink' href="https://www.instagram.com/maputo_street_art/">Instagram</a>
            <a className='socialLink' href="https://www.youtube.com/@TheAfroivan">YouTube</a>
            <a className='socialLink' href="https://www.facebook.com/maputostreetarts">Facebook</a>
            <a className='socialLink' href="www.gofundme.com/f/maputo-street-art-festival-book-printing">GoFundMe</a>
          </div>
        </div>
        <div className='contacts' >
          <h3>Contact us:</h3>
          <p>WhatsApp: +258 84 266 8551</p>
          <p>Email: maputostreetart@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;