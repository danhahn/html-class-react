import React from 'react'
import Layout from '../Layout/Layout';
import NavLink from '../NavLink/NavLink';
import InfoTags from '../InfoTags/InfoTags';

import data from '../../lessons/lessons';

const Lessons = React.createClass({
  render () {
    const { intros } = data;
    return (
      <Layout style={{width: '100%', paddingBottom: '1em'}}>
        <h1>Lessons</h1>
        {intros.map( ({ id, text, info }) => (
          <div key={id}>
            <h2 style={{display: 'flex', justifyContent: 'space-between'}}>
              <NavLink to={`/lessons/${id}/`}>Lesson {id}</NavLink>
              <InfoTags info={info}/>
            </h2>
            <p>{text}</p>
            <NavLink className="btn btn-primary" to={`/lessons/${id}/`}>View Full Lesson</NavLink>            
          </div>
        ))}
      </Layout>
    )
  }
})

export default Lessons
