import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components/native";
import FeaturedCard from "../Components/FeaturedCard";
import Header from "../Components/Header";
import { fetchRecipes } from "../redux/recipes/actions";

class DashboardScreen extends Component {
  componentDidMount() {
    if (!this.recipes) {
      this.props.fetchRecipes();
    }
  }

  render() {
    return (
      <DashboardWrapper>
        <Header>Welcome</Header>
        <FeaturedCard text="Discover Recipes"/>
      </DashboardWrapper>
    );
  }
}

const DashboardWrapper = styled.View`
  align-items: flex-start;
  padding: 20px;
`

const mapStateToProps = state => {
  const { recipes } = state;
  return { recipes };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);


