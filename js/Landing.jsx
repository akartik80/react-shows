import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landling">
    <h1>svideo</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">or browse all</Link>
  </div>
);

export default Landing;
