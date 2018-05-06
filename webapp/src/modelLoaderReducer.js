import * as THREE from 'three'

export const LOAD_MODEL = 'LOAD_MODEL'

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


const initialState = {
  loadedObject: null
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case LOAD_MODEL: {
      return {
        ...state,
        loadedObject: {...state.loadedObject, [payload['1']]: payload['0']}

      }
    }
    default:
      return state
  }
}
