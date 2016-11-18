import React from 'react';
import Layout from '../Layout/Layout';
import marked from 'marked';

import markdownFile from './about.md';
import image from './Daniel-Hahn-6.jpg';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const About = React.createClass({
  rawMarkup() {
    return{ __html: marked(markdownFile)};
  },
  render () {
    return (
      <Layout>
        <h1>About</h1>
        <div className="page-layout no-flex">
          <div className="photo">
            <img src={image} alt=""/>
          </div>
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </Layout>
    )
  }
})

export default About
