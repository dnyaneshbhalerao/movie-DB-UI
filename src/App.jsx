import React from 'react'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import appReducer from './reducers/appReducer'
import appTheme from './appStyles/appTheme'

import '../assets/css/index.css'

/**
 * It holds the initial shape or state of the app
 * contain entire state of the application.
 */
const initialState = {

}
const store = createStore(appReducer, initialState)

const App = () => (
  <MuiThemeProvider theme={appTheme}>
    <Provider store={store}>
      <div>
          My Movie Db App is under construction... setup is in progress
      </div>
    </Provider>
  </MuiThemeProvider>
)

export default App
