import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const { events, onEventDelete } = this.props;
    console.log('EventList events', events)
    return (
      <div>
        {events && events.map(event =>
          <EventListItem key={event.id}
            event={event}
            onEventDelete={onEventDelete}
          />
        )}
      </div>
    )
  }
}

export default EventList


