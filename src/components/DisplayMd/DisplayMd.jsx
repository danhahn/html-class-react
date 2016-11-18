import React from 'react';
import marked from 'marked';

import '../../../node_modules/highlight.js/styles/monokai-sublime.css';

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

const DisplayMd = React.createClass({
  getDefaultProps() {
    return {
      id: 1,
      lesson: 'index',
    };
  },
  rawMarkup(id, lesson) {
    return{ __html: this.getMarkdownFile(id, lesson)};
  },
  getMarkdownFile(id=1, file='index') {
    return marked(require(`../../lessons/${id}/${file}.md`));
  },
  render () {
    const { id, lesson, title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div className="page-content" dangerouslySetInnerHTML={this.rawMarkup(id, lesson)} />
      </div>
    )
  }
});

export default DisplayMd;
