import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
class RecipeLibraryScreen extends Component {
  render() {
    const { recipes } = this.props;
    const recipe = recipes.recipeCollection[0];
    return (
      <View style={styles.container}>
        <Text>{recipe.name}</Text>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
    height: 130,
  },
});