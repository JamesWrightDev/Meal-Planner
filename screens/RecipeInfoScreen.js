import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Tabs from "../Components/Tabs";

class RecipeInfoScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  handleChangeTab(i) {
    this.setState({
      activeTab: i
    });
  }

  render() {
    const { navigation } = this.props;
    const { recipes } = this.props;

    const recipeId = navigation.getParam("recipeId");
    const recipe = recipes.filter(item => item.id === recipeId);

    const { name, methods, ingredients, Calories, CookingTime } = recipe[0];

    const Ingredients = () => {
      return (
        ingredients &&
        ingredients.map(item => (
          <RecipeIngredient key={item.id}>
            {item.name.Ingredient_Name}
          </RecipeIngredient>
        ))
      );
    };

    const Methods = () => {
      return (
        methods &&
        methods.map(item => (
          <RecipeStep key={`method${item.id}`}>
            {item.Step_Instructions}
          </RecipeStep>
        ))
      );
    };

    const tabOptions = ["Ingredients", "Method"];
    const tabContents = [Ingredients, Methods];

    return (
      <RecipeInfoContainer>
        <RecipeImage
          source={{
            uri:
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg&fm=jpg"
          }}
        />
        <RecipeWrapper>
          <RecipeTitle>{name}</RecipeTitle>

          <RecipeMeta>
            <TextChip primary>{`${CookingTime} hours`}</TextChip>
            <TextChip secondary>{`${Calories} Calories`}</TextChip>
          </RecipeMeta>

          <Tabs content={tabContents} labels={tabOptions} />
        </RecipeWrapper>
      </RecipeInfoContainer>
    );
  }
}

const RecipeInfoContainer = styled.View`
  height: 100%;
`;

const RecipeWrapper = styled.View`
  margin: -25px 0;
  padding: ${props => props.theme.spacing.cat};
  background-color: white;
  border-radius: 28px;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.52);
`;

const RecipeImage = styled.Image`
  height: 200px;
`;

const RecipeTitle = styled.Text`
  font-family: "source-sans-pro-black";
  font-weight: 300;
  font-size: ${props => props.theme.fontSize.large};
  margin: ${props => props.theme.spacing.mouse} 0;
`;

const RecipeMeta = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
`;

const TextChip = styled.Text`
  border: solid 1px ${props => (props.primary ? "red" : "green")};
  padding: ${props => props.theme.spacing.ant}
    ${props => props.theme.spacing.hamster};
  font-size: ${props => props.theme.fontSize.small};
  border-radius: 50px;
  align-self: flex-start;
  color: ${props => (props.primary ? "red" : "green")};
`;

const RecipeIngredient = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 300;
  padding: ${props => props.theme.spacing.mouse} 0;
`;

const RecipeStep = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 300;
  padding: ${props => props.theme.spacing.mouse} 0;
`;

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

export default connect(mapStateToProps)(RecipeInfoScreen);
