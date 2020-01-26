import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = (props) => {
  return (
    <Text style={styles.header}>{props.text}</Text>
  )
}
export default Header

const styles = StyleSheet.create({
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 50,
    color: "#EF476F"
  },
});