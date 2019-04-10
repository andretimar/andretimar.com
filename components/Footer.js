import React from 'react';
import Link from 'next/link';

const BehanceIcon = '../static/images/icon-behance.svg';
const DribbbleIcon = '../static/images/icon-dribbble.svg';
const GitHubIcon = '../static/images/icon-github.svg';
const LinkedinIcon = '../static/images/icon-linkedin.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="title">Let's Work Together</p>
    </div>
    <div className="container middle">
      <div className="left">
        <p className="callout">
          Need an extra hand for your project? Looking for a reliable JS ninja
          with passion?
          <br /> I’ve got you. <span className="white"> Let’s do this! 👉</span>
        </p>
      </div>
      <div className="right">
        <Link href={`/contact`} as={`/contact`}>
          <a className="btn btn-white">Get In Touch</a>
        </Link>
      </div>
    </div>
    <div className="container">
      <div>
        <p className="copyright">© 2019 All Rights Reserved - Andre Timar</p>
      </div>
      <div className="social-icons">
        <Link href={`https://www.behance.net/andretimar`}>
          <a target="_blank">
            <img src={BehanceIcon} alt="Behance" />
          </a>
        </Link>
        <Link href={`https://github.com/andretimar`}>
          <a target="_blank">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </Link>
        <Link href={`https://www.linkedin.com/in/andre-timar-a3b9a0107/`}>
          <a target="_blank">
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
