import React, { Component } from "react";
import styled from "styled-components/native";

import { Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createShoppingList } from "../redux/mealplan/actions";

class ShoppingListScreen extends Component {
  componentDidMount() {}

  render() {
    const { shoppingList } = this.props.mealPlan;
    return (
      <ShoppingListContainer>
        <Text>ShoppingList</Text>
        {
          shoppingList.map(item => {
            console.log(item);
            return(
              <ShoppingListItem key={item.id}>
                <Text>{item.name}</Text>
                <ShoppingListItemQuantity>{`${item.quantity} ${item.metric}`}</ShoppingListItemQuantity>
              </ShoppingListItem>
            )
          })
        }
      </ShoppingListContainer>
    );
  }
}
const ShoppingListContainer = styled.View`
  height: 100%;
  margin: 0 24px;

`

const ShoppingListItem = styled.View`
  padding: 12px 0;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`

const ShoppingListItemQuantity = styled.Text`
  color: gray;
`
const mapStateToProps = state => {
  const { mealPlan } = state;
  return { mealPlan };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createShoppingList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);
