import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import modalReducer from '../../features/modals/modalReducer.jsx'
import authReducer from '../../features/auth/authReducer'

import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: FormReducer,
  testRdcr: testReducer,
  eventsRdcr: eventReducer,
  modalsRdcr: modalReducer,
  authRdcr: authReducer
})

export default rootReducer