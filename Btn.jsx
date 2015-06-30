
import React from 'react'
import btn from 'basscss-btn/index.css'
import primary from 'basscss-btn-primary/index.css'

class Btn extends React.Component {

  render () {
    let cx = [
      btn.btn,
      primary['btn-primary']
    ].join(' ')

    return (
      <button {...this.props}
        className={cx}>
        {this.props.children}
      </button>
    )
  }

}

export default Btn

