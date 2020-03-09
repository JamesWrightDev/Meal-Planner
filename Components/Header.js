import React from 'react';
import {
  Text, StyleSheet,
} from 'react-native';

const Header = (props) => {
  const { text } = props;
  return (
    <Text style={styles.header}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#000'
  },
});

export default Header;
