import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

import { recipeReducer } from './redux/reducers/index';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import RecipeLibraryScreen from './screens/RecipeLibraryScreen';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const reducers =  combineReducers({
  recipes: recipeReducer,
});

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    )
  }
}



const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
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
