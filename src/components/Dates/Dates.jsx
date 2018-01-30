import React from 'react';
import config from '../../data/config';
import moment from 'moment';

export default class Dates extends React.Component {
  render() {
    const {
      startDate,
      endDate,
      dateFormat
    } = config;
    return (<div>
      <p>
        {moment(startDate).format(dateFormat)}
        {" and "}
        {moment(endDate).format(dateFormat)}
      </p>
    </div>);
  }
}
