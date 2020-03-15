/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { Component } from "react";
import * as Font from "expo-font";

import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import recipeReducer from "./redux/recipes/reducer";
import mealPlanReducer from "./redux/mealplan/reducer";
import rootSaga from "./redux/store/index";

import AppNavigator from './routing/index';

import theme from "./styles/theme";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  recipes: recipeReducer,
  mealPlan: mealPlanReducer
});

const store = createStore(
  reducers,
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