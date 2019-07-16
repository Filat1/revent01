import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter, incrementAsync, decrementAsync } from './testActions'
import { openModal } from '../modals/modalActions'


const mapStateToProps = (state) => ({
  dataFromStore: state.testRdcr.answer,
  loading: state.testRdcr.loading
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  incrementAsync,
  decrementAsync,
  openModal
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, incrementAsync,
      decrementAsync, dataFromStore, openModal, loading } = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The Answer is: {dataFromStore} </h3>
        <Button loading={loading} onClick={incrementCounter} color='green' content='Increment' />
        <Button loading={loading} onClick={decrementCounter} color='red' content='Decrement' />
        <Button loading={loading} onClick={incrementAsync} color='green' content='incrementAsync' />
        <Button loading={loading} onClick={decrementAsync} color='red' content='decrementAsync' />
        <Button onClick={() => openModal('TestModal', { data: 77 })}
          color='teal' content='Open Modal' />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
