import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class FeaturedCard extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('RecipeLibraryScreen')}>
      <ImageBackground
        source={{uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg&fm=jpg'}}
        style={styles.backgroundImage}
        imageStyle={{borderRadius: 15}}>
        <Text style={styles.header} >Discover Recipes</Text>
      </ImageBackground>
    </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height:100,
    width:300
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
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});

export default withNavigation(FeaturedCard);