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
} from "../redux/actions";

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
  margin: 12px;
`;

const MealPlanHeader = styled.Text`
  font-family: "source-sans-pro-black";
  font-size: 32px;
`;

const MealPlanItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  padding: 18px 0;
  margin: 12px 0;
`;

const MealPlanItemName = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: 22px;
`;

const MealPlanItemQuantity = styled.Text`
  font-family: "source-sans-pro-regular";
  font-size: 28px;
`;

const MealPlanControls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

const MealPlanButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
  border-radius: 25px;
`;

const ButtonIcon = styled.Image`
  width: ${props => props.theme.spacing.hamster};
  height: ${props => props.theme.spacing.hamster};
`;
