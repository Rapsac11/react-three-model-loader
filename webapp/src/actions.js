import * as THREE from 'three'
import ZoneModel from './components/models/ZoneModel.json'

export const SAMPLE_ACTION = 'SAMPLE_ACTION'
export const SAMPLE_THUNKED_ACTION = 'SAMPLE_THUNKED_ACTION'
export const LOAD_MODEL = 'LOAD_MODEL'

export const sampleAction = item => ({
  type: sampleAction,
  payload: item
})

export const sampleThunkedAction = (item) => dispatch => {
    dispatch({
      type: sampleThunkedAction,
      payload: item
    })
}

export const loadModel = (url, name) => dispatch => {
  let loader = new THREE.JSONLoader();
  loader.load(url, function ( geometry ) {
    var loadedObject = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({
        vertexColors : THREE.FaceColors,
    }));
    console.log(loadedObject.material)
    dispatch({
      type: LOAD_MODEL,
      payload: [loadedObject, name]
    })
  })
}
