import React from 'react';
//import {MapStateToProps, MapDispatchToProps} from 'react-redux';
//import {connect} from 'react-redux';
import "../assets/css/index.css";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core'
import appReducer from './reducers/appReducer';
import appTheme  from './appStyles/appTheme';

/**
 * It holds the initial shape or state of the app
 * contain entire state of the application. 
 */
const initialState = {

} 
const store = createStore(appReducer, initialState); //optional parameter  window.STATE_FROM_SERVER

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <MuiThemeProvider theme={appTheme}>  
        <Provider store={store}>
          <div>
            My Movie Db App is under construction... setup is in progress
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}


export default App
