import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat} = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temp} color="orange" units="k"/></td>
        <td><Chart data={press} color="green" units="hPa"/></td>
        <td><Chart data={hum} color="blue" units="%"/></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>도시</th>
            <th>온도(K)</th>
            <th>기압(hPa)</th>
            <th>습도(%)</th>
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
