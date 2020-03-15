import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { Image } from "react-native";

const BottomTabIcon = props => {
  const mealPlanCount = props.mealPlan.recipes.length;
  return (
    <Icon>
      <Image
        source={require("../assets/icons/eat.png")}
        resizeMode="contain"
        style={{ width: 30, height: 30 }}
      />
      {
        mealPlanCount > 0 ? <Notification>{mealPlanCount > 0 ? mealPlanCount : null}</Notification> : null
      }
    </Icon>
  );
};

const Icon = styled.View`
  width: 50px;
`;

const Notification = styled.Text`
  position: absolute;
  left: 80%;
  top: -10px;
  border-radius: 25px;
  padding: 5px 10px;
  background-color: #02c39a;
  color: whitesmoke;
`;

const mapStateToProps = state => {
  const { mealPlan } = state;
  return { mealPlan };
};

export default connect(mapStateToProps, null)(BottomTabIcon);
