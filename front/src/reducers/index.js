import {combineReducers} from 'redux'
import auth from './Auth.js'
import testing from './testing.js'

export default combineReducers({
  auth,
  testing
})
