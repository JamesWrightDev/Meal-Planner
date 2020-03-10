import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createShoppingList } from '../redux/actions';


class ShoppingListScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>ShoppingList</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { mealPlan } = state;
  return { mealPlan };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createShoppingList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);
