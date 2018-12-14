import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    userSign: ''
  }

  this.handleSignChange = this.handleSignChange.bind(this)
  this.handleSearch = this.handleSearch.bind(this)
}

handleSignChange(event) {
  this.setState({
    userSign: event.target.value
  })
}

handleSearch(event) {
    this.props.getAztro(this.state.userSign);
    event.preventDefault();
}

  render() {

    return (
      <div>
        <div className="searchbar-div">
          <div className="search-input-div">
            <select onChange={this.handleSignChange} className="search-input">
              <option value="find-sign">Find your sign!</option>
              <option value="aries">Aries</option>
              <option value="taurus">Libra</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
            </select>
          </div>
          <div>
            <button onClick={this.handleSearch} className="search-button">GO</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
