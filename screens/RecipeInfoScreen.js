import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class RecipeInfoScreen extends Component {

  render() {
    const recipeId = this.props.navigation.getParam('recipeId');

    const { recipes } = this.props;

    let recipe = recipes.recipeCollection.filter(item => {
      return item.id == recipeId
    });
    const { name, method, ingredients, time } = recipe[0];

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{time}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { recipes } = state
  return { recipes }
};
export default connect(mapStateToProps)(RecipeInfoScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 130,
  },
});