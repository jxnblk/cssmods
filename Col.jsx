
import React from 'react'
import grid from 'basscss-grid/index.css'
import space from 'basscss-white-space/index.css'

class Col extends React.Component {

  render () {
    let cx = []
    let { xs, sm, md, lg } = this.props
    if (xs) {
      cx.push(grid['col'])
    } else if (sm) {
      cx.push(grid['sm-col'])
    } else if (md) {
      cx.push(grid['md-col'])
    } else if (lg) {
      cx.push(grid['lg-col'])
    }
    if (xs) {
      cx.push(grid['col-' + xs])
    }
    if (sm) {
      cx.push(grid['sm-col-' + sm])
    }
    if (md) {
      cx.push(grid['md-col-' + md])
    }
    if (lg) {
      cx.push(grid['lg-col-' + lg])
    }
    cx.push(space.px2)
    return (
      <div className={cx.join(' ')}>
        {this.props.children}
      </div>
    )
  }

}

export default Col

