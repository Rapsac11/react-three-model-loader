import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { connect } from'react-redux';
import ThreeDModel from '../ThreeDModel';
import { loadModel } from '../../actions'


class SampleThreeComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(-10,  10, 30);
  }

  componentWillMount(){
    this.props.loadModel(
      'https://s3-ap-southeast-2.amazonaws.com/three.json.zonemodel/ZoneModel.json',
      'dummy'
    )
  }

  render() {
    const { model } = this.props;
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <div>
      <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
      >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={90}
          aspect={width / height}
          near={0.05}
          far={10000}

          position={this.cameraPosition}
        />
        <ThreeDModel data={model} name='dummy'/>
      </scene>
    </React3>
  </div>);
  }
}

export default connect(
  state => ({
    model: state.loadedObject
  }),
  {
    loadModel
  }
)(SampleThreeComponent)
