import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/team.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Team = () => (
  <Main
    title="Team"
    description="Learn more about the Team."
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">Team Members</Link></h2>
          {/* <p>(in about {count} words)</p> */}
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Team;
