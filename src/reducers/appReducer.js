import { combineReducers } from 'redux'
import {reducer1} from './allReducers'
// All reducers are combined to make single reducer
let appReducer = combineReducers({
  reducer1
})

export default appReducer
