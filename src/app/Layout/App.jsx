import React, { Component } from 'react';
import EventDashboard from '../../features/event/eventDashboard/eventDashboard'
import NavBar from '../../features/nav/navBar/NavBar'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import EventForm from '../../features/event/EventForm/EventForm'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import TestComponent from '../../features/testarea/TestComponent';
import MyTest from '../../features/testarea/mytest';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/mytest' component={MyTest} />
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/manage/:id' component={EventForm} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
