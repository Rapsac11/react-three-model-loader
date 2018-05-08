import { combineReducers } from 'redux'

import modelLoaderReducer from './modelLoaderReducer'
import someOtherReducer from './someOtherReducer'

export default combineReducers({
  modelLoaderReducer,
  someOtherReducer
})
