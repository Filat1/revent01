import React from 'react';
import { Modal } from 'semantic-ui-react';
import { closeModal } from './modalActions'
import { connect } from 'react-redux'

const MapDispatchToProps = {
  closeModal
}

const mapStateToProps = (state) => ({
  num: state.modalsRdcr.modalProps.data
})


const TestModal = ({ closeModal, num }) => {
  // console.log('props', props)
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Test Modal... nothing to see here</p>
          <p>number: {num}</p>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(mapStateToProps, MapDispatchToProps)(TestModal);
