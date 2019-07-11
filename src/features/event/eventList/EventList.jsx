import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const { events, onEventDelete } = this.props;
    let ItemList = {}
    if (events !== null) {
      ItemList = events.map(event => <EventListItem key={event.id} event={event}
        onEventDelete={onEventDelete} />)
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


