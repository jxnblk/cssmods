
import React from 'react'
import grid from 'basscss-grid/index.css'
import space from 'basscss-white-space/index.css'

class Container extends React.Component {

  render () {
    let cx = [
      grid.container,
      space.px2
    ].join(' ')
    return (
      <div className={cx}>
        {this.props.children}
      </div>
    )
  }

}

export default Container

