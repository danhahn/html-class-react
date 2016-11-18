import React from 'react';
import Layout from '../Layout/Layout';
import marked from 'marked';

import markdownFile from './ascii.md';

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
        <h1>Ascii Codes</h1>
        <div className="page-layout no-flex">
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </Layout>
    )
  }
})

export default About
