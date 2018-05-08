import * as THREE from 'three'

export const UPDATE_POS_INFO = 'UPDATE_POS_INFO'

export const updatePosInfo = (item, direction) => dispatch => {
  const valueSwitch = (item) => ({
    "vectorX": 5,
    "vectorY": 5,
    "vectorZ": 5,
    "quarternionVectorX": 0.05,
    "quarternionVectorY": 0.05,
    "quarternionVectorZ": 0.05
  })[item]
  const directionSwitch = (direction) => ({
    "up": 1,
    "down": -1
  })[direction]
    let value = valueSwitch(item)*directionSwitch(direction)
    dispatch({
      type: UPDATE_POS_INFO,
      payload: [item, value]

  })
}

const initialState = {
  loadedObject: null,
  displayVariables: {
    vectorX: 0,
    vectorY: 400,
    vectorZ: 100,
    quarternionVectorX: 0.9,
    quarternionVectorY: 0,
    quarternionVectorZ: 0
  }
}


export default function (state = initialState, {type, payload}) {
  switch (type) {
    case UPDATE_POS_INFO: {
      return {
        ...state,
        displayVariables: {...state.displayVariables, [payload['0']]: (state.displayVariables[payload['0']] + payload['1'])}
      }
    }
    default:
      return state
  }
}
