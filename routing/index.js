import React from "react";
import { Image } from "react-native";
import BottomTabIcon from '../Components/BottomTabIcon';
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

const defaultStackOptions = {
  title: false,
  headerStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  headerTintColor: '#02C39A',
};

const HomeStack = createStackNavigator(
  {
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: defaultStackOptions,
  },
  RecipeLibraryScreen: {
    screen: RecipeLibraryScreen,
    navigationOptions: defaultStackOptions,
  },
  RecipeInfoScreen: {
    screen: RecipeInfoScreen,
    navigationOptions: defaultStackOptions,
  }
  }
)

const MealplanStack = createStackNavigator({
  MealPlanDashBoard: {
    screen: MealPlanHome,
    navigationOptions: defaultStackOptions,
  },
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
          <BottomTabIcon />
          // <Image
          //   source={require("../assets/icons/eat.png")}
          //   resizeMode="contain"
          //   style={{ width: 30, height: 30 }}
          // />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
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