import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>도시</th>
            <th>온도</th>
            <th>기압</th>
            <th>습도</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect (mapDispatchToProps)(WeatherList);
