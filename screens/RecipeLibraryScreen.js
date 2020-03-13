import React, { Component } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions } from "react-navigation";
import RecipeCard from "../Components/RecipeCard";
import { addRecipeMealplan } from "../redux/actions/index";




class RecipeLibraryScreen extends Component {
  componentDidMount() {}

  render() {
    const { recipes } = this.props;

    const viewRecipe = id => {
      this.props.navigation.dispatch(
        StackActions.push({
          routeName: "RecipeInfoScreen",
          params: {
            recipeId: id
          }
        })
      );
    };

    const addRecipe = item => {
      this.props.addRecipeMealplan(item);
    };

    return (
      <RecipeLibraryContainer bounces>
        <RecipeRowTitle>Your Favourites</RecipeRowTitle>
        <RecipeRow horizontal bounces showsHorizontalScrollIndicator>
          {recipes &&
            recipes.map(item => (
              <View key={item.id}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => viewRecipe(item.id)}
                >
                  <RecipeCard name={item.name} />
                </TouchableOpacity>
                {/* <Button title="add" onPress={() => addRecipe(item)} /> */}
              </View>
            ))}
        </RecipeRow>
      </RecipeLibraryContainer>
    );
  }
}

const RecipeLibraryContainer = styled.ScrollView`
  height: 100%;
`;
const RecipeRow = styled.ScrollView`
  display: flex;
  flex-direction: row;
  height: 300px;
`;

const RecipeRowTitle = styled.Text`
  font-family: "source-sans-pro-light";
  font-size: 32px;
  padding: 12px;
  margin-top: 24px;
`

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipeMealplan }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeLibraryScreen);
