import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FeaturedCard from '../Components/FeaturedCard';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container} onPress={() => this.props.navigation.navigate('RecipeLibraryScreen')}>
        <Text style={styles.header}>Welcome</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        <FeaturedCard/>
      </View>
    );
  }
}
export default DashboardScreen;
i
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 50
  },
});
