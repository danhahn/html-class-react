import React from 'react';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';

import './Footer.scss';

const Footer = React.createClass({
  render () {
    return (
      <div className="global-footer">
        <Layout>
          <div style={{display: 'flex'}}>
            <Logo
              height={31}
              width={100}
              colors={{slash: 'white', letter:'white', tag:'white'}}
            />
            <p>&copy; 2017 Daniel Hahn</p>
          </div>
        </Layout>
      </div>
    )
  }
})

export default Footer;
