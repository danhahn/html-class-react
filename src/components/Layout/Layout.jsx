import React from 'react'

const Layout = ({style, children}) => {
  return (
    <div className="main-content" style={style}>
      { children }
    </div>
  )
}

export default Layout