import React from 'react';
import Layout from '../Layout/Layout';
import DisplayMd from '../DisplayMd/DisplayMd';
import SideNavBar from '../SideNavBar/SideNavBar';

const Lessons = React.createClass({
  render () {
    const { id, lesson } = this.props.params;
    return (
      <Layout>
        <h1>Lesson {id}</h1>
        <div className="page-layout">
          <SideNavBar
            id={id}
          />
          <DisplayMd
            id={id}
            lesson={lesson}
          />
        </div>
      </Layout>
    )
  }
})

export default Lessons;
