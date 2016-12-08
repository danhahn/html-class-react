import React from 'react';
import NavLink from '../NavLink/NavLink';

import './SideNavBar.scss';

const SideNavBar = React.createClass({
  getNavFile(id=1) {
    return require(`../../lessons/${id}/nav.js`).default;
  },
  render () {
    const { id } = this.props;
    return (
      <nav className="page-nav">
        <ul>
          {this.getNavFile(id).map( ({url, text}, i) => (
            <li key={i}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
})

export default SideNavBar;
