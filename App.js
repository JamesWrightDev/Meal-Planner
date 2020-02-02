import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

import { recipeReducer} from './redux/reducers/index';
import { mealPlanReducer } from './redux/reducers/mealPlanReducer';
import { rootSaga } from './redux/store/index'

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import RecipeLibraryScreen from './screens/RecipeLibraryScreen';
import RecipeInfoScreen from './screens/RecipeInfoScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const sagaMiddleware = createSagaMiddleware()

const reducers =  combineReducers({
  recipes: recipeReducer,
  mealPlan: mealPlanReducer
});

const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;


const HomeNavigator = createStackNavigator(
  {
    DashboardScreen: DashboardScreen,
    RecipeLibraryScreen: RecipeLibraryScreen,
    RecipeInfoScreen: RecipeInfoScreen
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: HomeNavigator,
  RecipeLibraryScreen: RecipeLibraryScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
