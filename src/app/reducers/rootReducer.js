import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'

//import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
  testRdcr: testReducer,
  eventsRdcr: eventReducer
})

export default rootReducer