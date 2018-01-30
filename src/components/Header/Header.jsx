import React from 'react';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';
import Dates from '../Dates/Dates';

import './Header.scss';

const Header = (props) => {
  return (
    <div className="Header">
      <Layout>
        <div className="Header__content">
          <Logo />
          <div className="Header__title">
            <h1>SVA Weekend HTML</h1>
            <Dates/>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Header;
