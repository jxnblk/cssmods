
import React from 'react'
import cx from 'classnames'
import layout from 'basscss-utility-layout/index.css'
import typography from 'basscss-utility-typography/index.css'
import typescale from 'basscss-type-scale/index.css'
import space from 'basscss-white-space/index.css'
import grid from 'basscss-grid/index.css'
import forms from 'basscss-base-forms/index.css'
import color from 'basscss-color-forms/index.css'

class Input extends React.Component {

  render () {
    let type = this.props.type || 'text'

    return (
      <div className={space.mb2}>
        <label className={cx(typescale.h5, typography.bold, layout.block)}
          htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input {...this.props}
          type={type}
          className={cx(grid['col-12'], color.field)} />
      </div>
    )
  }

}

export default Input

