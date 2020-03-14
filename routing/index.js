import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import {
  DashboardScreen,
  RecipeLibraryScreen,
  RecipeInfoScreen,
  MealPlanHome,
  ShoppingListScreen,
  LoadingScreen,
  LoginScreen
} from '../screens/index';

const HomeStack = createStackNavigator({
  DashboardScreen,
  RecipeLibraryScreen,
  RecipeInfoScreen
})

const MealplanStack = createStackNavigator({
  MealPlanDashBoard: MealPlanHome,
  ShoppingListScreen
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: false,
        tabBarIcon: () => (
          <Image
            source={require("../assets/icons/home.png")}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        )
      }
    },
    MealPlan: {
      screen: MealplanStack,
      navigationOptions: {
        tabBarLabel: false,
        tabBarIcon: () => (
          <Image
            source={require("../assets/icons/eat.png")}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 16
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen,
  DashboardScreen: TabNavigator,
  RecipeLibraryScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;