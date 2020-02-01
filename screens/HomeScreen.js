import React, { Component } from 'react'

import { View, Text, StyleSheet, Button } from 'react-native';
import FeaturedCard from '../Components/FeaturedCard';

class HomeScreen extends Component {
  render() {
    return (
       <View style={styles.container} >
        <Text>HomeScreen</Text>
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        <FeaturedCard />
      </View>
    )
  }
}

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

export default HomeScreen;