import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../eventList/EventList'
import { connect } from 'react-redux'
import { deleteEvent } from '../eventActions'

const mapStateToProps = (state) => {
  return {
    eventsFromStore: state.eventsRdcr
  }
}

const mapDispatchToProps = {
  deleteEvent
}

class EventDashboard extends Component {

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId)
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventDelete={this.handleDeleteEvent}
            events={this.props.eventsFromStore}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);