import React from 'react';
import EventDashboard from '../features/event/eventDashboard/eventDashboard'
import NavBar from '../features/nav/navBar/NavBar'
import { Container } from 'semantic-ui-react'


function App() {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>

  );
}

export default App;
