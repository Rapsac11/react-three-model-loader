# react-three-model-loader

Load 3D JSON models into state to render on a [three.js](http://threejs.org/) canvas. Utilises the [JSONLoader](https://threejs.org/docs/#api/loaders/JSONLoader).

This loader is best used with [react-three-renderer](https://github.com/toxicFork/react-three-renderer).

This package is very much a work in progress, use with caution.

Installation
=============
```
npm install --save https://github.com/Rapsac11/react-three-model-loader
```

Usage - setState
=============
```
import * as THREE from 'three';
import { loadModelLocally } from 'react-three-model-loader'
```

`loadModelLocally()` returns a Promise containing a three.js object. It takes in a url and a name and is used like so:

```
componentDidMount(){
  loadModelLocally(url, name)
      .then(loadedObject => {this.setState({model: loadedObject})})
}
```

Usage - Redux
=============
```
import * as THREE from 'three';
import { connect } from 'react-redux'
import { loadModel } from 'react-three-model-loader'
```

`loadModel()` is an Action Creator that will place a three.js object in the global store. In order for this to work you will need to combine the `modelLoaderReducer` provided in this package with the local reducer. It also takes in a url and a name and is used like so:

```
componentDidMount(){
  const { loadModel } = this.props

  loadModel(url, name)
}

export default connect(
  state => ({
    model: state.modelLoaderReducer.loadedObject
  }),
  {
   loadModel
  }
)(MyComponent)
```

and in your Reducer.js (or similar):

```
import { combineReducers } from 'redux'

import { modelLoaderReducer } from 'react-three-model-loader'
//import myOtherReducer from './myOtherReducer'

export default combineReducers({
  modelLoaderReducer,
  //myOtherReducer
})
```
Quick rendering
=============
The `<ThreeDModel />` component can be used for quick rendering of the model inside a react-three-renderer `<scene />`

```
<ThreeDModel
  data={this.state.model} //required prop
  name='dummy' //required prop
/>
```

Using THREE.OrbitControls
=============
To bind the [OrbitControls](https://threejs.org/docs/#examples/controls/OrbitControls) to the mouse:

```
import * as THREE from 'three';
import { OrbitControls} from 'react-three-model-loader'

componentDidMount() {
  const controls = new OrbitControls(this.refs.camera);
  this.controls = controls;
}

componentWillUnmount() {
  this.controls.dispose();
  delete this.controls;
}
```

Typical setup
=============
The example below uses react-three-renderer to get up and running fast
```
import React, {Component} from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import { connect } from 'react-redux'
import { OrbitControls, ThreeDModel, loadModelLocally, loadModel } from 'react-three-model-loader'

class ReactThreeRenderer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loadedModel: null
    };
    this.cameraPosition = new THREE.Vector3(0, 400, 100);
    this.cameraQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0.9, 0, 0), -Math.PI / 2);
  }


  componentWillMount(){
    const { loadModel } = this.props

    loadModel(
      'url',
      'reduxModel'
    )

    loadModelLocally(
      'url',
      'setStateModel'
    )
    .then(loadedObject => {console.log(loadedObject); this.setState({loadedModel: loadedObject})})
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
    const { model } = this.props
    const { loadedModel } = this.state
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
      <React3 mainCamera="maincamera" width={width} height={height} clearColor={0xbcbcbc}>
        <scene>
          <perspectiveCamera ref="camera" name="maincamera" {...cameraprops} />
          <ThreeDModel data={model} name='reduxModel'/>
          <ThreeDModel data={loadedModel} name='setStateModel'/>
        </scene>
      </React3>
    );
  }
}

export default connect(
  state => ({
    model: state.modelLoaderReducer.loadedObject
  }),
  {
   loadModel
  }
)(ReactThreeRenderer)

```

Contributing
=============
Feel free to contribute, please remember to run `npm run modularise` prior to committing.
