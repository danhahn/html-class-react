import React from 'react';
import classNames from 'classnames';
import './InfoTags.scss';

const InfoTag = ({item}) => {
  const styles = classNames({
    InfoTag: true,
    [`${item}`]: true,
  })
  return (
    <div className={styles}>{item}</div>
  )
}

const InfoTags = React.createClass({
  getDefaultProps() {
    return {
      info: ['html', 'css', 'js'],
    };
  },
  render () {
    const { info } = this.props;
    return (
      <div className="InfoTags">
        {info.map( (item, i) => (
          <InfoTag key={i} item={item}/>
        ))}
      </div>
    )
  }
})

export default InfoTags
