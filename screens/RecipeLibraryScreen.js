import React, { Component } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions } from "react-navigation";
import RecipeCard from "../Components/RecipeCard";
import { addRecipeMealplan } from "../redux/mealplan/actions";

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
                <RecipeItem
                  activeOpacity={0.8}
                  onPress={() => viewRecipe(item.id)}
                >
                  <StyledButton onPress={() => addRecipe(item)}>
                    <ButtonIcon source={require("../assets/icons/plus.png")} />
                  </StyledButton>
                  <RecipeCard name={item.name} imageUrl={item.image.url} />
                </RecipeItem>
              </View>
            ))}
        </RecipeRow>
      </RecipeLibraryContainer>
    );
  }
}

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipeMealplan }, dispatch);
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
`;

const StyledButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 50%;
  align-self: flex-start;
  border-radius: 50px;
  background-color: #02C39A;
  padding: 15px;
  top: 40px;
  left: 65%;
  z-index: 999;
  opacity: 0.9;
`;

const ButtonIcon = styled.Image`
  width: 16px;
  height: ${props => props.theme.spacing.hamster};
`;

const RecipeItem = styled.TouchableOpacity`
  position: relative;
  z-index: 1;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeLibraryScreen);
