import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FeaturedCard from "../Components/FeaturedCard";
import Header from "../Components/Header";
import { fetchRecipes } from "../redux/recipes/actions";

class DashboardScreen extends Component {
  constructor(props) {
    super();

    const { recipes, fetchRecipes } = props;
  }

  componentDidMount() {
    if (!this.recipes) {
      this.props.fetchRecipes();
    } else {
      console.log(true);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Welcome" />
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        <FeaturedCard />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerStyle: {
    backgroundColor: "#f4511e"
  }
});
