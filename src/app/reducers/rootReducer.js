import { combineReducers } from 'redux';
import { reducer as toastReducer } from 'react-redux-toastr'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import modalReducer from '../../features/modals/modalReducer.jsx'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  testRdcr: testReducer,
  eventsRdcr: eventReducer,
  modalsRdcr: modalReducer,
  authRdcr: authReducer,
  asyncRdcr: asyncReducer,
  toastr: toastReducer
})

export default rootReducer