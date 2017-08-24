import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Report from './Report.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.generate = this.generate.bind(this);
  }

  generate() {
    let list = Array.from(Array(101).keys());
    this.setState({ list });
  }

  verifyMultiples(element) {
    if (element === 0) {
      return null;
    }
    else if (element % 3 === 0 && element % 5 === 0) {
      return 'CentralFranqueado';
    }
    else if (element % 3 === 0) {
      return 'Central';
    } else if (element % 5 === 0) {
      return 'Franqueado';
    }
    return element;
  }

  render() {
    console.log(this.state.list);
    const { list } = this.state;
    return (
      <div className="container">
        <header>
          <h1>Central do Franqueado</h1>

          <button className="button" onClick={this.generate}>
            Gerar
          </button>
        </header>

        <ul>
          {list.length > 0 &&
            list.map((el) =>
              <Report key={el} element={el} verifyMultiples={this.verifyMultiples} />,
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
