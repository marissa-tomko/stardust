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
  const userSign = event.target.innerHTML

  this.setState({
    userSign: userSign
  })
}



handleSearch(event) {
    this.props.getAztro(this.state.userSign);
    event.preventDefault();
}



  render() {


    return (
      <div>
        <div className="sign-container">
          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                ARIES
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                TAURUS
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                GEMINI
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                CANCER
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                LEO
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                VIRGO
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                LIBRA
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                SCORPIO
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                SAGITTARIUS
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                CAPRICORN
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                AQUARIUS
              </div>
            </div>
            <div onMouseEnter={this.handleSignChange} >
              <div onClick={this.handleSearch} className="sign-text">
                PISCES
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
