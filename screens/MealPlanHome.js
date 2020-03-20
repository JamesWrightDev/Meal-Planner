import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styled from "styled-components/native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StackActions } from "react-navigation";
import {
  createShoppingList,
  addRecipeMealplan,
  removeRecipeMealplan
} from "../redux/mealplan/actions";

class MealPlanHome extends Component {
  componentDidMount() {}

  handleIncrement(recipe) {
    this.props.addRecipeMealplan(recipe);
  }

  handleDecrement(recipe) {
    this.props.removeRecipeMealplan(recipe);
  }

  handleCreateShoppingList() {
    this.props.createShoppingList();

    this.props.navigation.dispatch(
      StackActions.push({
        routeName: "ShoppingListScreen"
      })
    );
  }

  render() {
    const { mealPlan } = this.props;

    const NoPlans = () => <Text>You no have plans</Text>;

    const MealPlan = () => (
      <View>
        <MealPlanHeader>Your Mealplan</MealPlanHeader>
        {mealPlan.recipes.map(item => (
          <MealPlanItem key={item.id}>
            <MealPlanItemName>{item.name}</MealPlanItemName>
            <MealPlanControls>
              <MealPlanButton onPress={() => this.handleDecrement(item)}>
                <ButtonIcon source={require("../assets/icons/minus.png")} />
              </MealPlanButton>
              <MealPlanItemQuantity>{`${item.quantity}`}</MealPlanItemQuantity>
              <MealPlanButton onPress={() => this.handleIncrement(item)}>
                <ButtonIcon source={require("../assets/icons/plus.png")} />
              </MealPlanButton>
            </MealPlanControls>
          </MealPlanItem>
        ))}
      </View>
    );

    return (
      <MealPlanContainer>
        {mealPlan && mealPlan.recipes.length > 0 ? <MealPlan /> : <NoPlans />}
        <Button
          title="Create Shopping List"
          onPress={() => this.handleCreateShoppingList()}
        />
      </MealPlanContainer>
    );
  }
}

const mapStateToProps = state => {
  const { mealPlan } = state;
  return { mealPlan };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createShoppingList,
      addRecipeMealplan,
      removeRecipeMealplan
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanHome);

const MealPlanContainer = styled.ScrollView`
  height: 100%;
  margin: ${props => props.theme.spacing.cat};
`;

const MealPlanHeader = styled.Text`
  font-family: "source-sans-pro-black";
  font-size: ${props => props.theme.fontSize.large};
`;

const MealPlanItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  padding: ${props => props.theme.spacing.cat} 0;
  margin: ${props => props.theme.spacing.cat} 0;
`;

const MealPlanItemName = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: ${props => props.theme.fontSize.medium};
`;

const MealPlanItemQuantity = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: ${props => props.theme.fontSize.medium};
`;

const MealPlanControls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

const MealPlanButton = styled.TouchableOpacity`
  width: ${props => props.theme.spacing.cat};
  height: ${props => props.theme.spacing.cat};
  align-items: center;
  justify-content: center;
  border: solid 1px black;
  border-radius: ${props => props.theme.spacing.cat};
`;

const ButtonIcon = styled.Image`
  width: ${props => props.theme.spacing.hamster};
  height: ${props => props.theme.spacing.hamster};
`;
