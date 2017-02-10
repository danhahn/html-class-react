import React from 'react';
import Layout from '../Layout/Layout';
import DisplayMd from '../DisplayMd/DisplayMd';
import SideNavBar from '../SideNavBar/SideNavBar';

const Lessons = React.createClass({
  getNavFile(id=1, lesson=null) {
    const { text } = require(`../../lessons/${id}/nav.js`).default
      .find((data) => data.id === lesson);
    return text;
  },
  render () {
    const { id, lesson } = this.props.params;
    return (
      <Layout>
        <h1>Lesson</h1>
        <div className="page-layout">
          <SideNavBar
            id={id}
          />
          <DisplayMd
            id={id}
            title={this.getNavFile(id, lesson)}
            lesson={lesson}
          />
        </div>
      </Layout>
    )
  }
})

export default Lessons;
