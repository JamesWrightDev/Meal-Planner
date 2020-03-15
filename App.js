/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { Component } from "react";
import * as Font from "expo-font";

import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import {rootSaga, rootReducer} from './redux/store/index';

import AppNavigator from './routing/index';

import theme from "./styles/theme";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      "source-sans-pro-black": require("./assets/fonts/SourceSansPro-Black.otf"),
      "source-sans-pro-regular": require("./assets/fonts/SourceSansPro-Regular.otf"),
      "source-sans-pro-light": require("./assets/fonts/SourceSansPro-Light.otf")
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App