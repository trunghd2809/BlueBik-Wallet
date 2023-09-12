import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Layout from '../../constants/Layout.constants';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: Layout.spacing.md,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Layout.spacing.md,
  },
  buttonText: {
    color: 'white',
    fontSize: Layout.fontSize.large,
    fontWeight: 'bold',
  },
});

export { Button };
