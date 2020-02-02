import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, BackHandler, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';
import { addRecipeMealplan } from '../redux/actions/index';

class RecipeLibraryScreen extends Component {
  render() {
    const { recipes } = this.props;
    const { recipeCollection } = recipes;
;

    const viewRecipe = (id) => {
      this.props.navigation.dispatch(StackActions.push({
        routeName: 'RecipeInfoScreen',
        params: {
          recipeId: id,
        },
      }))
    }

    const addRecipe = (id) => {
      this.props.addRecipeMealplan(id);
    }

    return (
      <View>
        {
          recipeCollection && recipeCollection.map(item => {
            return(
              <View key={item.id}>
                <TouchableOpacity

                  activeOpacity={0.8}
                  onPress={ () => viewRecipe(item.id) }>
                  <RecipeCard name={item.name}/>
                </TouchableOpacity>
                <Button title="add"
                onPress={ () => addRecipe(item.id) }
                ></Button>
              </View>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipeMealplan  }, dispatch)
}
export default connect(mapStateToProps ,mapDispatchToProps)(RecipeLibraryScreen);