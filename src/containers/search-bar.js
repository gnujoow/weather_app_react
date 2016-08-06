import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="여러분 도시의 날씨를 알아봐요"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type="submit" className="btn btn-primary">고고해</button>
        </span>
      </form>
    );
  }
}
