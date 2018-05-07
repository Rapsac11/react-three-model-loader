import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper'

class App extends Component {


  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  null,null
)(App)
