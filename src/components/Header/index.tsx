import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Layout from '../../constants/Layout.constants';

interface HeaderProps {
  // children: React.ReactNode;
  label: string,
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: Layout.fontSize.giant,
  }
});

export { Header };
