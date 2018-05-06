import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import { connect } from'react-redux';
import ThreeDModel from '../ThreeDModel';
import { loadModel } from '../../modelLoaderReducer'

const OrbitControls = require('../../util/three-orbit-controls.js')(THREE)

class SampleThreeComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(0, 400, 100);
    this.cameraQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0.9, 0, 0), -Math.PI / 2);
  }

  componentWillMount(){
    const { loadModel } = this.props
    loadModel(
      'https://s3-ap-southeast-2.amazonaws.com/three.json.zonemodel/ZoneModel.json',
      'dummy'
    )
  }

  componentDidMount() {
    const controls = new OrbitControls(this.refs.camera);
    this.controls = controls;
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  render() {
    const { model, displayVariables } = this.props;
    const width = window.innerWidth;
    const height = 400;
    const aspectratio = width / height;

    var cameraprops = {
      fov : 75,
      aspect : aspectratio,
      near : 0.1,
      far : 1000,
      position : new THREE.Vector3(0,40,200),
      lookAt : new THREE.Vector3(0,0,0)
    };

    return (
      <div>
        <React3 mainCamera="maincamera" width={width} height={height} clearColor={0xbcbcbc}>
          <scene>
            <perspectiveCamera ref="camera" name="maincamera" {...cameraprops} />
            <ambientLight
              color={new THREE.Color(0x333333)}
            />
            <directionalLight
              color={new THREE.Color(0xFFFFFF)}
              intensity={1.5}
              position={new THREE.Vector3(0, 0, 60)}
            />
            <ThreeDModel data={model} name='dummy'/>
            <mesh
              key={THREE.Math.generateUUID()}
              rotation={new THREE.Euler(-Math.PI / 2,0,0)}
            >
            <planeBufferGeometry
              width={300}
              height={300}
              widthSegments={30}
              heightSegments={30}
            />
            <meshBasicMaterial
              opacity={0.5}
              color={0x333000}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>
        </scene>
      </React3>
    </div>);
  }
}

export default connect(
  state => ({
    model: state.modelLoaderReducer.loadedObject
  }),
  {
    loadModel
  }
)(SampleThreeComponent)
