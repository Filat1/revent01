import { MODAL_CLOSE, MODAL_OPEN } from './modalConstants';

export const openModal = (modalType, modalProps) => {
  console.log('inside export const openModal')
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  }
}

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  }
}