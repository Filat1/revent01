import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
}

class EventForm extends Component {

  state = {
    event: emptyEvent
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updatedEvent(this.state.event)
    } else {
      this.props.createEvent(this.state.event);
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('nextProps:', nextProps);
  //   console.log('prevState:', prevState);
  //   if (prevState.selectedEvent !== nextProps.selectedEvent) {
  //     return {
  //       event: nextProps.selectedEvent || emptyEvent
  //     }
  //   }
  //   return null;
  // }


  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps);
    console.log('this.props.selectedEvent:', this.props.selectedEvent);
    if (this.props.selectedEvent !== nextProps.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }



  componentDidUpdate(prevProps, prevState) {

  }



  onInputChange = (evt) => {
    //const newEvent = this.state.event;
    const newEvent = JSON.parse(JSON.stringify(this.state.event));
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event: newEvent
    })
  }


  onChangeState = () => {
    this.setState({ event: { title: 'NOTHING TODAY' } })
  }

  render() {
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit"> Submit</Button>
          <Button type="button" onClick={this.props.handleCancel}>Cancel</Button>
          <Button type="button" onClick={this.onChangeState}>Nothing</Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm
