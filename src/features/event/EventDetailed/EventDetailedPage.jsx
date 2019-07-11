import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import { connect } from 'react-redux'

// const event = {
//   id: '1',
//   title: 'Trip to Redux Tower of London',
//   date: '2020-03-27',
//   category: 'culture',
//   description:
//     'REdux Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//   city: 'London, UK',
//   venue: "Tower of London, St Katharine's & Wapping, London",
//   hostedBy: 'Bob',
//   hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
//   attendees: [
//     {
//       id: 'a',
//       name: 'Bob',
//       photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
//     },
//     {
//       id: 'b',
//       name: 'Tom',
//       photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
//     },
//     {
//       id: 'c',
//       name: 'Dan',
//       photoURL: 'https://randomuser.me/api/portraits/men/25.jpg'
//     }
//   ]
// }

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.eventsRdcr.length > 0) {
    event = state.eventsRdcr.filter(event => event.id === eventId)[0];
  }
  return {
    eventFromStore: event
  }
}

const EventDetailedPage = ({ eventFromStore }) => {
  console.log('inside EventDetailedPage() eventFromStore:', eventFromStore)
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={eventFromStore} />
        <EventDetailedInfo event={eventFromStore} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={eventFromStore.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapStateToProps)(EventDetailedPage)