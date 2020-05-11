import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      binary: '',
      decimal: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.convertBinToDec = this.convertBinToDec.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ binary: value });

  }
  convertBinToDec(event) {
    event.preventDefault()
    const binary = this.state.binary
    let decimal = 0

    for (let index = binary.length - 1, j = 0; index >= 0; index--, j++) {
      const c = binary[index]
      decimal += Number(c) * Math.pow(2, j);
    }

    this.setState({ decimal: decimal })
  }

  render() {
    return (
      <div className='App'>
        <h2>BINARY TO DECIMAL CONVERTER</h2>
        <form onSubmit={this.convertBinToDec}>
          <div className='input-container'>

            <label htmlFor="">Binary Input</label>
            <input
              placeholder='Enter 0 or 1'
              type="text"
              name='binary'
              value={this.state.binary}
              onChange={this.handleChange} />

            <label htmlFor="">Decimal Output</label>
            <label htmlFor="">
              {this.state.decimal}
            </label>

          </div>
          <div className="button">
            <button>Convert</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;