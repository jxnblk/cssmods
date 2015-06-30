
import React from 'react'

class Select extends React.Component {

  render () {
    <div>
      <label>{this.props.label}</label>
      <select {...this.props}>
        {this.props.children}
      </select>
    </div>
  }

}

export default Select

