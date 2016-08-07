import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
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
        </tbody>
      </table>
    );
  }
};

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect (mapDispatchToProps)(WeatherList);
