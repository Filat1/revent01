import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'
import { openModal } from '../modals/modalActions'


const mapStateToProps = (state) => ({
  dataFromStore: state.testRdcr.answer
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  openModal
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, dataFromStore, openModal } 
                                                                = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The Answer is: {dataFromStore} </h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
        <Button onClick={() => openModal('TestModal', { data: 77 })} 
                                        color='teal' content='Open Modal' />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
