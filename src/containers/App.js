import React, { Component } from 'react';
import { Provider } from "react-redux";

import Store from '../common/Store';

import PageContainer from './PageContainer/PageContainer';

import { HashRouter  } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return ( 
      <Provider store={Store}>
        <HashRouter >
          <MuiThemeProvider>
                <PageContainer/>
          </MuiThemeProvider>
        </HashRouter >
      </Provider>
    );
  }
}

export default App;
