import { toastr } from 'react-redux-toastr'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS } from './EventConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockAPI'


export const fetchEvents = (events) => {
  return {
    type: FETCH_EVENTS,
    payload: events
  }
}

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let events = await fetchSampleData();
      dispatch(fetchEvents(events))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}

export const createEvent = (event) => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success('Success!', 'Event has been created')
      toastr.info('INFO: Event Created', 'Event created this is ablosut info')
    } catch (error) {
      toastr.error('Oops', 'Somthing went wrong with creation')
    }
  };
};

export const updateEvent = (event) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success('Success! Updated!', 'Event has been updated')
      toastr.info('INFO: Event Updated', 'Event updated this is ablosut info')
    } catch (error) {
      toastr.error('Oops', 'Somthing went wrong with update')
    }
  };
}

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  }
}

