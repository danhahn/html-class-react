import React from 'react';
import Layout from '../Layout/Layout';
import NavLink from '../NavLink/NavLink';
import classNames from 'classnames';

import './Nav.scss';

const Trigger = ({ handleClick, active }) => {
  const styles = classNames({
    trigger: true,
    active
  })
  return (
    <div className={styles} onClick={handleClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}

const Nav = React.createClass({
  getInitialState() {
    return {
      active: false,
    }
  },
  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  },
  render () {
    const { active } = this.state;
    const navStyles = classNames({
      nav: true,
      active
    });
    return (
      <div className="global-nav">
        <Layout>
          <div className={navStyles}>
            <Trigger
              handleClick={this.handleClick}
              active={active}
            />
            <ul className="global-nav-list">
              <li>
                <NavLink onClick={this.handleClick} to="/" onlyActiveOnIndex={true}>Home</NavLink>
              </li>
              <li>
                <NavLink onClick={this.handleClick} to="/lessons">Lessons</NavLink>
              </li>
              <li>
                <NavLink onClick={this.handleClick} to="/tag-list">Tag list</NavLink>
              </li>
              <li>
                <NavLink onClick={this.handleClick} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink onClick={this.handleClick} to="/ascii">Ascii Codes</NavLink>
              </li>
              <li>
                <NavLink onClick={this.handleClick} to="/colors">Colors</NavLink>
              </li>
            </ul>
          </div>
        </Layout>
      </div>
    )
  }
})

export default Nav;
