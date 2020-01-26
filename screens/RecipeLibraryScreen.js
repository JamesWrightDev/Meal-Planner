import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../Components/Header';
class RecipeLibraryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="Discover Recipes"></Header>
          <Button title="home" onPress={() => this.props.navigation.navigate('DashboardScreen')}/>
      </View>
    )
  }
}
export default RecipeLibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
});