import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../Components/Header';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  const { recipes } = state
  return { recipes }
};
export default connect(mapStateToProps)(RecipeLibraryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
});