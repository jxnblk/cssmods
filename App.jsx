
import React from 'react'
import baseTypography from 'basscss-base-typography/index.css'
import reset from 'basscss-base-reset/index.css'
import baseColor from 'basscss-color-base/index.css'

import Container from './Container.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import Btn from './Btn.jsx'
import Input from './Input.jsx'

class App extends React.Component {

  render () {
    return (
      <Container>
        <h1>Basscss <a href='https://github.com/css-modules/css-modules'>CSS Modules</a> Demo</h1>
        <Row>
          <Col sm={6}>Col sm6</Col>
          <Col sm={6}>Col sm6</Col>
        </Row>
        <hr />
        <Row>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        </Row>
        <form>
          <Input label='Input' name='demo-input' />
          <Btn>Btn</Btn>
        </form>
      </Container>
    )
  }

}

export default App

