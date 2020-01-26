import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class RecipeLibraryScreen extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {
            recipes.recipeCollection && recipes.recipeCollection.map(item => {
              return(
                  <RecipeCard
                    key={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    ingredients={item.ingredients}
                    method={item.method}
                    time={item.time}
                  />
              )
            })
          }
        </ScrollView>
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