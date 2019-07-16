import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { closeModal } from '../modals/modalActions'

// export const login = (creds) => {
//   return {
//     type: LOGIN_USER,
//     payload: {
//       creds
//     }
//   }}

export const login = (creds) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER, payload: { creds } });
    dispatch(closeModal());
  }
}

export const asynclogin = (creds) => {
  return async dispatch => {
    await delay(2000);
    dispatch({
      type: LOGIN_USER,
      payload: {
        creds
      }
    });
    dispatch(closeModal());
  }
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  }
}


