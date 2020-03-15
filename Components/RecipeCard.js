import React from "react";
import {
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

export default function RecipeCard(props) {
  const { name, imageUrl } = props;

  return (
    <RecipeCardContainer style={styles.container}>
      <RecipeImage
        style={styles.image}
        source={{uri: `http://192.168.0.102:1337${imageUrl}`}}
      />
      <RecipeHeader>{name}</RecipeHeader>
    </RecipeCardContainer>
  );
}

const RecipeCardContainer = styled.View`
  width: 200px;
  height: 250px;
  margin: ${props => props.theme.spacing.dog} 0;
  padding: 0 12px;
  position: relative;
  z-index: -1;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 12px;
`;

const RecipeHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: ${props => props.theme.spacing.cat} 0;
  font-family: "source-sans-pro-black";
  font-weight: 800;
  text-align: center;
`;

const styles = StyleSheet.create({
  button: {
    marginLeft: 50,
    marginRight: 50
  },
  buttonText: {
    fontSize: 22
  }
});
