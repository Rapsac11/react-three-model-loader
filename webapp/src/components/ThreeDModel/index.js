import React, { Component } from 'react';
import { connect } from 'react-redux';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class ThreeDModel extends Component {

  createMaterial(material){
    let m;
    switch(material.type){
      case 'MeshBasicMaterial':
        m = (
          <meshBasicMaterial
            color={material.color}
          />
        );
        break;
      case 'MeshLambertMaterial':
        m = (
          <meshLambertMaterial
            transparent={material.transparent}
            alphaTest={material.alphaTest}
            side={material.side}
            opacity={material.opacity}
            visible={material.visible}
            color={material.color}
            emissive={material.emissive}
            wireframe={material.wireframe}
            wireframeLinewidth={material.wireframeLinewidth}
          />
        );
        break;
      default:
        m = null;
    }
    return m;
  }

    render() {
      const { data, name } = this.props

      if (!data) {
        return (null)
      } else {
        return (
          <mesh
            >
              <geometry
                  faces={ data[name].geometry.faces }
                  vertices={ data[name].geometry.vertices }
                  colors={ data[name].geometry.colors }
                  faceVertexUvs={ data[name].geometry.faceVertexUvs }
              />
              {this.createMaterial(data[name].material)}
            </mesh>
        )
      }
    }
  }

  export default (ThreeDModel)
