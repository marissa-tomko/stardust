import React from 'react';
import './Results.css';


class Results extends React.Component {


  render() {

    return (
      <div className="results-table-div">
        <table>
          <tbody>
            <tr>
              <th className="main-forecast row-one">Daily Forecast</th>
              <th className="sub-forecast row-one">Compatibility</th>
              <th className="sub-forecast row-one">Your Mood</th>
            </tr>
            <tr>
              <td className="main-forecast">{this.props.description}</td>
              <td className="sub-forecast">{this.props.compatibility}</td>
              <td className="sub-forecast">{this.props.mood}</td>
            </tr>

            <tr>
              <th className="sub-forecast row-two">Lucky Color</th>
              <th className="sub-forecast row-two">Lucky Number</th>
              <th className="sub-forecast row-two">Lucky Time</th>
            </tr>
            <tr>
              <td className="sub-forecast">{this.props.color}</td>
              <td className="sub-forecast">{this.props.lucky_number}</td>
              <td className="sub-forecast">{this.props.lucky_time}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Results;
