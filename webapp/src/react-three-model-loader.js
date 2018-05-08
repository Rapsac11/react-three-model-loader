import * as THREE from 'three';
import { loadModel, loadModelLocally } from './modelLoaderReducer'
import ThreeDModel from './components/ThreeDModel'
import modelLoaderReducer from './modelLoaderReducer'
const OrbitControls = require('./util/three-orbit-controls.js')(THREE)

export {
  loadModel ,
  loadModelLocally ,
  ThreeDModel,
  OrbitControls,
  modelLoaderReducer
}
