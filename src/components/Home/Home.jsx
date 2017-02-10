import React from 'react';
import Layout from '../Layout/Layout';
import moment from 'moment';
import NavLink from '../NavLink/NavLink';
import InfoTags from '../InfoTags/InfoTags';
import './Home.scss';

import data from '../../lessons/lessons';


const Home = React.createClass({
  getLessons() {
    const { startDate, weeks, noClass, intros } = data;

    const momentNoClass = noClass.map( c => moment(c).format('MMMM D, YYYY'));
    let lessons = [];
    let i = 0;
    let week = 0;

    while (i < weeks) {
      const date = moment(startDate).day((week * 7) + 1);
      // console.log(date.format('MMMM D, YYYY'), momentNoClass[0]);
      const hasNoClass = momentNoClass.includes(date.format('MMMM D, YYYY'));
      if(!hasNoClass) {
        lessons = [
          ...lessons,
          {
            lesson: i+1,
            date,
            text: intros[i].text,
            info: intros[i].info,
            id: intros[i].id,
          }
        ];
        i++;
      }
      week++;
    }
    return lessons;
  },
  render () {
    return (
      <Layout>
        <h1>Home</h1>
        <div className="homepage">
          {this.getLessons().map( ({ lesson, date, text, info, id }, i) => (
            <div key={i} className="homepage-item">
              <h2><NavLink to={`/lessons/${id}/`}>Lesson {lesson}</NavLink></h2>
              <p>{text}</p>
              <InfoTags info={info}/>
              <NavLink to={`/lessons/${id}/`} className="btn btn-primary">View Lesson</NavLink>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
})

export default Home
