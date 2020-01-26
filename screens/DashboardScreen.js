import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FeaturedCard from '../Components/FeaturedCard';
import Header from '../Components/Header';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions';

class DashboardScreen extends Component {
  test() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <View style={styles.container} >
        <Header text="Welcome"></Header>
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        <FeaturedCard />
        <Button title="button" onPress={() => this.test()}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { recipes } = state
  return { recipes }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(DashboardScreen);

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
