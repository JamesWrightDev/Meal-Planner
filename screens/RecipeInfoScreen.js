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

    const recipe = recipes.recipeCollection.filter(item => {
      return item.id == recipeId
    });

    console.log(recipe);

    return (
      <View style={styles.container}>
        <Text>{recipe[0].name}</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 130,
  },
});