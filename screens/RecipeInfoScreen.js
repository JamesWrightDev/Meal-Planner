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

    let recipe = recipes.filter(item => {
      return item.id == recipeId
    });

    const { name, methods, ingredients, time } = recipe[0];

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{time}</Text>
        {
          ingredients && ingredients.map(item => {
            return(
              <Text key={item.key}>{item.name.Ingredient_Name}</Text>
            )
          })
        }

        {
          methods && methods.map((item, i) => {
            return(
              <Text key={i}>{item.Step_Instructions}</Text>
            )
          })
        }
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