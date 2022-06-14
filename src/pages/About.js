import React from 'react';
import { Link, useMatch, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

function About() {
  const { url, path } = useMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
}
export default About;
