import React, { Component } from "react";
import { View, Text, ViewBase } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createShoppingList } from "../redux/actions";

class ShoppingListScreen extends Component {
  componentDidMount() {}

  render() {
    const { mealPlan } = this.props;

    return (
      <View>
        <Text>ShoppingList</Text>
        {
          mealPlan.shoppingList.map(item => {
            return(
              <View key={item.id}>
                <Text>{item.name.Ingredient_Name}</Text>
                <Text>{item.Quantity}</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { mealPlan } = state;
  return { mealPlan };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createShoppingList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);
