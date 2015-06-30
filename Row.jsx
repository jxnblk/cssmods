
import React from 'react'
import grid from 'basscss-grid/index.css'
import layout from 'basscss-utility-layout/index.css'
import space from 'basscss-white-space/index.css'

class Row extends React.Component {

  render () {
    let cx = [
      space.mxn2,
      layout.clearfix
    ].join(' ')

    return (
      <div className={cx}>
        {this.props.children}
      </div>
    )
  }

}

export default Row

