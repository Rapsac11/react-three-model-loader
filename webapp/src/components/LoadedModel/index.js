import React, { Component } from 'react';
import { connect } from'react-redux';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class LoadedModel extends Component {

    constructor( props, context ) {
        super( props, context );
    }

    render() {
      return(
      <div>
        <Wrapper />
      </div>
    )
    }

}

export default connect(
  state => ({
    mesh: state.loadedObject
  }), null
)(LoadedModel)
