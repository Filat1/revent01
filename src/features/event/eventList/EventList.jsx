import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {

  // onEventEdit = () => {
  //   this.props.onEventEdit();
  // }
  render() {
    const { events, onEventOpen, onEventDelete } = this.props;
    let ItemList = {}
    if (events !== null) {
      ItemList = events.map(event => <EventListItem key={event.id} event={event}
        onEventOpen={onEventOpen} onEventDelete={onEventDelete} />)
    }
    else { ItemList = {} }
    return (
      <div>
        {ItemList}
      </div>
    )
  }
}

export default EventList


