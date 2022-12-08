import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">Brgy. Bunga Nagcarlan, Laguna</p>
        <p className="p__opensans">+63 951 244 4756</p>
        <p className="p__opensans">+63 995 025 4173</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" style={{marginTop: '15'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">8:00 AM - 8:00 PM</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">8:00 AM - 10:00 PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
