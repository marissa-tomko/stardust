import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      astroResults: '',
      showResults: false
    }

    this.getAztro = this.getAztro.bind(this);
  }

  getAztro(userSign) {
    const URL = `https://aztro.sameerkumar.website/?sign=${userSign}&day=today`;
    return fetch(URL, { method: 'POST'})
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse;
    })
    .then(response => {
      return userSign === "find-sign" || userSign.length === 0 ?
      this.setState({
        showResults: false
      })
      : this.setState({
        astroResults: response,
        showResults: true
      })


    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-header">S T A R D U S T</h1>

        <SearchBar
          getAztro={this.getAztro}
        />

        { this.state.showResults ?
          <Results
            description={this.state.astroResults.description}
            compatibility={this.state.astroResults.compatibility}
            mood={this.state.astroResults.mood}
            color={this.state.astroResults.color}
            lucky_number={this.state.astroResults.lucky_number}
            lucky_time={this.state.astroResults.lucky_time}
          />
        : '' }
      </div>
    );
  }
}

export default App;
