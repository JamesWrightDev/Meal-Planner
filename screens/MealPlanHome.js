import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchRecipes, createShoppingList } from '../redux/actions';


class MealPlanHome extends Component {
  componentDidMount(){

  }
  handleCreateShoppingList() {
    console.log('click', this.props);
    this.props.createShoppingList()
  }

  render() {
    const { mealPlan } = this.props;

    const NoPlans = () => {
      return(
        <Text>You no have plans</Text>
      )
    }

    const MealPlan = () => {
      return(
        <View>
          <Text>Your Meal Plan</Text>
          {
            mealPlan.recipes.map((item, i) => {
              return(
              <Text key={i}>{item}</Text>
              )
            })
          }
          <Button title="Create Shopping List" onPress={() => this.handleCreateShoppingList()}/>
        </View>
      )
    }

    return (
      <View style={styles.container} >
        {
          mealPlan && mealPlan.recipes.length > 0 ?  <MealPlan/>: <NoPlans/>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { mealPlan } = state
  return { mealPlan }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createShoppingList }, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(MealPlanHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerStyle: {
    backgroundColor: '#f4511e',
  },
});
