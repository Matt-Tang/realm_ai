import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Group 38 FYDP Overview.
          </p>
        </div>
      </header>
      <p>Welcome! We are Group 38. </p>
      <p>The group members are: Cliff Li, Ethan Lee, Ken Ming Lee, Matthew Tang, Michael Meng</p>
      <p>Feel free to read more about the<Link to="/about"> members of the group</Link>,
        or you can check out our {' '}
        {/* <Link to="/resume">resume</Link>, {' '} */}
        <Link to="/projects">progress and deliverables</Link>. {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me. */}
      </p>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
