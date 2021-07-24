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
            Group 38 FYDP Overview
          </p>
        </div>
      </header>
      <p>Welcome! We are Group 38 from the <a href="https://uwaterloo.ca/electrical-computer-engineering/">Department of Electrical and Computer Engineering</a>.</p>
      <p>The group members are: Cliff Li, Ethan Lee, Ken Ming Lee, Matthew Tang, Michael Meng</p>
      <p>Feel free to read more about the <Link to="/team">members of the group</Link>,
        or you can check out our {' '}
        <Link to="/timeline">progress and deliverables</Link>. {' '}
      </p>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </article>
  </Main>

);

export default Index;
