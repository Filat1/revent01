import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

const mapStateToProps = (state) => ({
  dataFromStore: state.testRdcr.answer
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, dataFromStore } = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The Answer is: {dataFromStore} </h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
