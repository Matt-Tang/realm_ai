import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/38.png`} alt="" />
      </Link>
      <header>
        <h2>REALM_AI</h2>
        <p><a href="mailto:yc23li@uwaterloo.ca">yc23li@uwaterloo.ca</a></p>
        <p><a href="mailto:ea6lee@uwaterloo.ca">ea6lee@uwaterloo.ca</a></p>
        <p><a href="mailto:km23lee@uwaterloo.ca">km23lee@uwaterloo.ca</a></p>
        <p><a href="mailto:ml3tang@uwaterloo.ca">ml3tang@uwaterloo.ca</a></p>
        <p><a href="mailto:m3meng@uwaterloo.ca">m3meng@uwaterloo.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, we are Group 38 and we are 5 Computer Engineering students who love playing games.</p>
      <p>By leveraging the power of Reinforcement Learning, we seek to aid game developers.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Matthew Tang 2021</p>
    </section>
  </section>
);

export default SideBar;
