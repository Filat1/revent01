import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../eventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
}

const eventsDashboardHardcoded = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.ipsum',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.ipsum.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }]

class EventDashboard extends Component {
  state = {
    events: eventsDashboardHardcoded,
    isOpen: false,
    selectedEvent: null
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  handleDeleteEvent = (eventId) => () => {
    this.setState(state => {
      const eventsAfterDelete = this.state.events.filter(e => e.id !== eventId)
      return {
        events: eventsAfterDelete
      }
    })
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    console.log('eventToOpen:', eventToOpen)
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }


  handleUpdatedEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (updatedEvent.id === event.id) {
          return Object.assign({}, updatedEvent)
        } else { return event }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }


  handleCancel = () => {
    this.setState({ isOpen: false })
  }


  render() {
    const { selectedEvent } = this.state
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList onEventOpen={this.handleOpenEvent}
            onEventDelete={this.handleDeleteEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive content="Create Event" />
          {this.state.isOpen
            && <EventForm
              updatedEvent={this.handleUpdatedEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>

    )
  }
}

export default EventDashboard;