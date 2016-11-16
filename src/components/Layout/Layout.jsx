import React from 'react'

const Layout = React.createClass({
  render () {
    return (
      <div className="main-content">
        { this.props.children }
      </div>
    )
  }
})

export default Layout
