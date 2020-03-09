import React, { Component } from 'react';
import {
  Text, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import { withNavigation, StackActions } from 'react-navigation';


class FeaturedCard extends Component {
  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.dispatch(StackActions.push({
          routeName: 'RecipeLibraryScreen',
        }))}
      >
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg&fm=jpg' }}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text style={styles.header}>Discover Recipes</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 300
  },
  backgroundImage: {
    width: '100%',
    maxHeight: '50%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
    padding: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default withNavigation(FeaturedCard);
