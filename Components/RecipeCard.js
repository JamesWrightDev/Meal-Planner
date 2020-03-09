import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

export default function RecipeCard(props) {
  const {
    name,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginBottom: 30,
  },
  backgroundImage: {
    maxHeight: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 22,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  info: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
