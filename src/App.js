// Light Switch Challenges
//
// As you begin these challenges, read over the stories and consider what your components are and what information they might need.
//
// Challenge 1
// Main
// - Story 1: As a user I see a light (square/circle)
// - Story 2: The light starts off (white)
// - Story 3: When I click the circle I see a message that the circle was clicked
// - Story 4: And the light switches to on (yellow)
// - Story 5: When the light is on and I click it again, it turns off (white)
//
// Challenge 2
// Main
// - Story 1: As a user A see a light (square/circle) and a button
//     - The light starts in off position (white)
// - Story 2: I can click the button
// - Story 3: When I click the button the light turns on (turns yellow)
// - Story 4: When the light is on and I click the button, the light turns off (white)
//
// Stretch
// - Story 5: I can add a light and a corresponding switch
// - Story 6: I can remove a light and its corresponding switch
//
// Consider this:
// As you add lights, is it easier with light state in App.js or in the individual light components?
// What are the pros and cons of state in App.js over the individual light components and vice versa?

import React, { Component } from 'react';
import './App.css';
import LightSwitch from './LightSwitch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <LightSwitch />
        <LightSwitch />
        <LightSwitch />

      </div>
    );
  }
}

export default App;
