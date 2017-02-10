import React from 'react'
import Layout from '../Layout/Layout';
import moment from 'moment';
import NavLink from '../NavLink/NavLink';

import data from '../../lessons/lessons';

const Lessons = React.createClass({
  getLessons() {
    const { startDate, weeks, noClass, intros } = data;

    const momentNoClass = noClass.map( c => moment(c).format('MMMM D, YYYY'));
    let lessons = [];
    let i = 0;
    let week = 0;

    while (i < weeks) {
      const date = moment(startDate).day((week * 7) + 1);
      console.log(week * 7 + 1);
      // console.log(date.format('MMMM D, YYYY'), momentNoClass[0]);
      const hasNoClass = momentNoClass.includes(date.format('MMMM D, YYYY'));
      if(!hasNoClass) {
        lessons = [
          ...lessons,
          {
            lesson: i+1,
            date,
            text: intros[i].text,
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
        <h1>Lessons</h1>
        {this.getLessons().map( ({ lesson, date, text }, i) => (
          <div key={i}>
            <h2><NavLink to={`/lessons/${i+1}/`}>Lesson {lesson}</NavLink></h2>
            <p>{text}</p>
          </div>
        ))}
      </Layout>
    )
  }
})

export default Lessons
