import { combineReducers } from '../../../../../../../.cache/typescript/2.9/node_modules/redux';
import {increment, decrement} from './allReducers';
//All reducers are combined to make single reducer
let appReducer = combineReducers({increment, decrement});

export default appReducer;