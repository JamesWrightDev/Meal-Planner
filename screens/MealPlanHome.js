import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions';


class MealPlanHome extends Component {
  componentDidMount(){

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
        <Text>You have plans</Text>
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
  return bindActionCreators({ fetchRecipes }, dispatch)
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
