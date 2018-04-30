import React, { Component } from 'react';
import { connect } from'react-redux';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class LoadedModel extends Component {

    constructor( props, context ) {
        super( props, context );
    }

    render() {

        const { mesh } = this.props;

        if( !mesh ) {
            return <mesh />;
        }

        // Look up your actual geometry object
        const meshData = mesh.geometry;

        return <mesh>
            <geometry
                faces={ mesh.geometry.faces }
                vertices={ mesh.geometry.vertices }
                colors={ mesh.geometry.colors }
                faceVertexUvs={ mesh.geometry.faceVertexUvs }
            />
            <materialResource
                resourceId="someMaterial"
            />
        </mesh>;

    }

}

export default connect(
  state => ({
    mesh: state.loadedObject
  }), null
)(LoadedModel)
