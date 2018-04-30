import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadModel } from '../../actions'
import Wrapper from '../Wrapper'

class App extends Component {

  componentWillMount(){
    this.props.loadModel()
  }

  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  null,
  {
    loadModel
  }
)(App)
