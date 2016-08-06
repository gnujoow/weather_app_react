import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <from className="input-group">
        <input
          placeholder="여러분 도시의 날씨를 알아봐요"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button className="btn btn-primary">고고해</button>
        </span>
      </from>
    );
  }
}
