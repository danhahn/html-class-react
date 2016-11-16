import React from 'react';
import Layout from '../Layout/Layout';
import NavLink from '../NavLink/NavLink';

// import nav from '../../data/1/nav';

// const nav = require(`../../data/1/nav.js`).default;
// import markdownFile from '../../data/1/index.md';

const Lessons = React.createClass({
  rawMarkup(id, lesson) {
    return{ __html: this.getMarkdownFile(id, lesson)};
  },
  getNavFile(id=1) {
    return require(`../../data/${id}/nav.js`).default;
  },
  getMarkdownFile(id=1, file='index') {
    console.log(`../../data/${id}/${file}.md`);
    return require(`../../data/${id}/${file}.md`);
  },
  render () {
    return (
      <Layout>
        <h1>Lesson {this.props.params.id}</h1>
        <div className="page-layout">
          <nav className="page-nav">
            <ul>
              {this.getNavFile(this.props.params.id).map( ({url, text}, i) => (
                <li key={i}>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div dangerouslySetInnerHTML={this.rawMarkup(undefined, this.props.params.lesson)} />
        </div>
      </Layout>
    )
  }
})

export default Lessons;
