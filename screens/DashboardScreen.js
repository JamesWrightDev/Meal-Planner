import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FeaturedCard from '../Components/FeaturedCard';
import Header from '../Components/Header';
import { connect } from 'react-redux';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Header text="Welcome"></Header>
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        <FeaturedCard />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { recipes } = state
  return { recipes }
};

export default connect(mapStateToProps)(DashboardScreen);

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
