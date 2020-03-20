import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styled from "styled-components/native";

import { withNavigation, StackActions } from "react-navigation";

const FeaturedCard = props => {
  const { navigation, text } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.dispatch(
          StackActions.push({
            routeName: "RecipeLibraryScreen"
          })
        )
      }
    >
      <CardImage
        source={{
          uri:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg&fm=jpg"
        }}
        imageStyle={{ borderRadius: 15 }}
      >
        <CardText>{text}</CardText>
      </CardImage>
    </TouchableOpacity>
  );
};
const CardImage = styled.ImageBackground`
  width: 100%;
  max-height: 200px;
  align-items: flex-start;
  justify-content: center;
`;

const CardText = styled.Text`
  color: white;
  font-size: ${props => props.theme.fontSize.large};
  max-width: 80%;
  padding: ${props => props.theme.spacing.cat};
`;

export default withNavigation(FeaturedCard);
