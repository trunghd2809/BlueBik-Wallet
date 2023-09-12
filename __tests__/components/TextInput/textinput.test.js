import React from 'react';
import renderer from 'react-test-renderer';

import { BTextInput } from '../../../src/components';

test('renders text input correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(<BTextInput label="Full name" onChangeText={onPress}/>).toJSON();
  expect(tree).toMatchSnapshot();
});