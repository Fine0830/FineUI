/**
 * Created by Fine on 2016/11/8.
 */

import React from 'react';
import Header from './Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
        {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = App;
