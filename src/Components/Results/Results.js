import React from 'react';
import './Results.css';


class Results extends React.Component {


  render() {

    return (
      <div>
        <div className="main-forecast">{this.props.description}</div>
        <div className="sub-forecast">Compatibility: {this.props.compatibility}</div>
        <div className="sub-forecast">Your Mood: {this.props.mood}</div>
        <div className="sub-forecast">Lucky Color: {this.props.color}</div>
        <div className="sub-forecast">Lucky Number: {this.props.lucky_number}</div>
        <div className="sub-forecast">Lucky Time: {this.props.lucky_time}</div>
      </div>
    )
  }
}

export default Results;
