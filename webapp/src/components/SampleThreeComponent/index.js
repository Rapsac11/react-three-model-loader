import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { connect } from'react-redux';

class SampleThreeComponent extends Component {
  constructor(props, context) {
    super(props, context);


    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(-10,  10, 30);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };
    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });
    };

  }

  render() {
    const { loadedMesh } = this.props;
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
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
        <mesh
        rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
        {!loadedMesh ? null :
          <mesh
          >
            <geometry
                faces={ loadedMesh.geometry.faces }
                vertices={ loadedMesh.geometry.vertices }
                colors={ loadedMesh.geometry.colors }
                faceVertexUvs={ loadedMesh.geometry.faceVertexUvs }
            />
            <meshBasicMaterial
              color={0xff0000}
              visible={true}
            />
          </mesh>}
      </scene>
    </React3>);
  }
}

export default connect(
  state => ({
    loadedMesh: state.loadedObject
  }), null
)(SampleThreeComponent);
