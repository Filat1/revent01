import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { firestoreConnect } from 'react-redux-firebase';
import EventList from '../eventList/EventList'
import { connect } from 'react-redux'
import { deleteEvent } from '../eventActions'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import EventActivity from '../EventActivity/EventActivity'



const mapStateToProps = (state) => {
  return {
    // eventsFromStore: state.eventsRdcr,
    eventsFromStore: state.firestore.ordered.events,
    loading: state.asyncRdcr.loading
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

    console.log('dashboard events:', this.props.eventsFromStore)
    const { loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventDelete={this.handleDeleteEvent}
            events={this.props.eventsFromStore}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  firestoreConnect([{ collection: 'events' }])(EventDashboard)
);