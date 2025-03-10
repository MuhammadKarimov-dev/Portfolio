import "./Footer.scss";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";

function Footer() {
  const { ref: footer, inView: element } = useInView();

  return (
    <div className="Footer" ref={footer} style={{ padding: '16px', backgroundColor: '#2D3748', color: 'white' }}>
      <div className={element ? "wrapper__view" : "wrapper"} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="contact-info">
          <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Contact Information</h4>
          <div className="contact-item" style={{ marginBottom: '8px' }}>
            <h5 style={{ fontSize: '1rem' }}>Call me:</h5>
            <p>*********</p>
          </div>
          <div className="contact-item">
            <h5 style={{ fontSize: '1rem' }}>Email:</h5>
            <a href="mailto:xxx@xyz.com" style={{ color: '#4FD1C5' }}>xxx@xyz.com</a>
          </div>
        </div>
        <ul className="social-links" style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '16px' }}>
            <a href="https://github.com/MrKarimov01/" aria-label="GitHub" style={{ color: '#4FD1C5' }}>
              <AiFillGithub size="1.5em" />
            </a>
          </li>
          <li style={{ marginRight: '16px' }}>
            <a href="#" aria-label="LinkedIn" style={{ color: '#4FD1C5' }}>
              <AiFillLinkedin size="1.5em" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Figma" style={{ color: '#4FD1C5' }}>
              <BiLogoFigma size="1.5em" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
