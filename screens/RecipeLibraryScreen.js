import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, BackHandler, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

class RecipeLibraryScreen extends Component {
  render() {
    const { recipes } = this.props;
    const { recipeCollection } = recipes;
;

    const handlePress = (id) => {
      this.props.navigation.dispatch(StackActions.push({
        routeName: 'RecipeInfoScreen',
        params: {
          recipeId: id,
        },
      }))
    }

    return (
      <View>
        {
          recipeCollection && recipeCollection.map(item => {
            return(
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={ () => handlePress(item.id) }>
                <RecipeCard name={item.name}/>
              </TouchableOpacity>
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
export default connect(mapStateToProps)(RecipeLibraryScreen);