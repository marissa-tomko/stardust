import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';

import StardustMoon from './stardust-moon.png';

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
      return userSign.length === 0 ?
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

        <div className="col-xs-12">
          <div className="col-xs-6">
            <SearchBar getAztro={this.getAztro} />
          </div>

          <div className="app-title">
            <p>Stardust</p>
          </div>

          <div className="col-xs-6">
            {
              this.state.showResults ?
              <div className="results-div">
                <Results
                  description={this.state.astroResults.description}
                  compatibility={this.state.astroResults.compatibility}
                  mood={this.state.astroResults.mood}
                  color={this.state.astroResults.color}
                  lucky_number={this.state.astroResults.lucky_number}
                  lucky_time={this.state.astroResults.lucky_time}
                />
              </div>
                : ''
            }
          </div>
        </div>


        <div className="img-div col-xs-12">
          <img className="img-fluid" src={StardustMoon} alt="moon" height="400" width="400" />
        </div>

      </div>
    );
  }
}

export default App;
