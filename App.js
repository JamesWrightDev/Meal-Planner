/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import recipeReducer from "./redux/reducers/index";
import mealPlanReducer from "./redux/reducers/mealPlanReducer";
import rootSaga from "./redux/store/index";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import RecipeLibraryScreen from "./screens/RecipeLibraryScreen";
import RecipeInfoScreen from "./screens/RecipeInfoScreen";
import MealPlanHome from "./screens/MealPlanHome";
import ShoppingListScreen from "./screens/ShoppingListScreen";

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

const TabNavigator = createBottomTabNavigator({
  Home: createStackNavigator({
    DashboardScreen,
    RecipeLibraryScreen,
    RecipeInfoScreen
  }),
  MealPlan: createStackNavigator({
    MealPlanDashBoard: MealPlanHome,
    ShoppingListScreen
  })
});

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen,
  DashboardScreen: TabNavigator,
  RecipeLibraryScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;