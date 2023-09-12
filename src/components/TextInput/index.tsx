import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

import Layout from '../../constants/Layout.constants';

interface BTextInputProps extends TextInputProps {
  label: string;
  borderColor?: string;
  errors?: string | null,
}

const BTextInput: React.FC<BTextInputProps> = ({
  label,
  borderColor = 'gray',
  errors,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} 
        <Text style={styles.require}>*</Text>
      </Text>
      <TextInput
        style={[styles.input, { borderColor }]}
        {...restProps}
      />
      {errors && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 4,
    fontSize: Layout.fontSize.medium,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    padding: Layout.spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  require: {
    color: 'red',
  },
  errors: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: Layout.fontSize.small,
    marginTop: 5,
  },
});

export { BTextInput };
