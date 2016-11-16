import React from 'react';
import Layout from '../Layout/Layout';
import NavLink from '../NavLink/NavLink';

const Nav = (props) => (
  <div className="global-nav">
    <Layout>      
      <ul className="global-nav-list">
        <li>
          <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/lessons">Lessons</NavLink>
        </li>
      </ul>
    </Layout>
  </div>
);

export default Nav;
