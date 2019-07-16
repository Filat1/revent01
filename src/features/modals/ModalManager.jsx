import React from 'react'
import { connect } from 'react-redux'
import TestModal from './TestModal'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
}

const mapState = (state) => ({
  currentModal: state.modalsRdcr
})

const ModalManager = ({ currentModal }) => {
  let renderedModal;
  console.log('currentModal:', currentModal)

  if (currentModal) {

    const { modalType, modalProps } = currentModal;

    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }
  console.log('renderedModal:', renderedModal)
  return (<span>{renderedModal}</span>)
}

export default connect(mapState)(ModalManager)
