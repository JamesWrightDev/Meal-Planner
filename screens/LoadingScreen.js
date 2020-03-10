import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
// import firebase from 'firebase';

class LoadingScreen extends Component {
  componentDidMount() {
    // this.checkIfLoggedIn();
    this.props.navigation.navigate("DashboardScreen");
  }

  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged(
  //     (user) => {
  //       if (user) {
  //         this.navigation.navigate('DashboardScreen');
  //       } else {
  //         this.navigation.navigate('LoginScreen');
  //       }
  //     }
  //   );
  // };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
