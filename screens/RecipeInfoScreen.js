import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class RecipeInfoScreen extends Component {
  componentDidMount() {}

  render() {
    const { navigation } = this.props;

    const recipeId = navigation.getParam("recipeId");

    const { recipes } = this.props;

    const recipe = recipes.filter(item => item.id === recipeId);

    const { name, methods, ingredients, time } = recipe[0];

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{time}</Text>
        {ingredients &&
          ingredients.map(item => (
            <Text key={item.key}>{item.name.Ingredient_Name}</Text>
          ))}

        {methods &&
          methods.map((item) => (
            <Text key={`method_${item.key}`}>{item.Step_Instructions}</Text>
          ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

export default connect(mapStateToProps)(RecipeInfoScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 130
  }
});
