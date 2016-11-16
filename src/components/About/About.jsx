import React from 'react';
import Layout from '../Layout/Layout';

import markdownFile from './about.md';
import image from './Daniel-Hahn-6.jpg';

const About = React.createClass({
  rawMarkup() {
    return{ __html: markdownFile};
  },
  render () {
    return (
      <Layout>
        <h1>About</h1>
        <div className="photo">
          <img src={image} alt=""/>
        </div>
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
      </Layout>
    )
  }
})

export default About
