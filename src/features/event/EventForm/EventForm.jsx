import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import cuid from 'cuid'
import moment from 'moment';
import Script from 'react-load-script';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createEvent, updateEvent } from '../eventActions'
import PlacesAutocomplete from 'react-places-autocomplete';
import TextInput from './../../../app/common/form/TextInput';
import TextArea from './../../../app/common/form/TextArea';
import SelectInput from './../../../app/common/form/SelectInput';
import DateInput from './../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';


const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {}

  if (eventId && state.eventsRdcr.length > 0) {
    event = state.eventsRdcr.filter(e => e.id === eventId)[0]
  }
  return {
    initialValues: event
  }
}

const mapDispatchToProps = {
  createEvent,
  updateEvent
}

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'Please provide a category' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({ message: 'Description needs to be at least 5 characters' })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  };

  onFormSubmit = values => {
    values.date = moment(values.date).format();
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bobform'
      };
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };
  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA189dnP51evM5cuvqMmHQaQRZ-qcM1lMQ&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            {/*<Form onSubmit={this.onSubmit}>*/}
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field name='title' type='text' component={TextInput} placeholder='Give your event a name' />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your event about"
              />
              <Field name='description' type='text' rows={3} component={TextArea} placeholder='Tell us about your event' />
              <Header sub color='teal' content='Event Location Details' />
              <Field name='city' type='text' component={TextInput} placeholder='Event City' />
              <Field name='venue' type='text' component={TextInput} placeholder='Event venue' />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and time of event"
              />

              <Button disabled={invalid || submitting || pristine} positive type="submit"> Submit</Button>
              <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(EventForm)
);

