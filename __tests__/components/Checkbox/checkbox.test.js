import React from 'react';
import renderer from 'react-test-renderer';

import { CheckBoxButton } from '../../../src/components';

test('renders checkbox correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(<CheckBoxButton onPress={onPress} value="test"/>).toJSON();
  expect(tree).toMatchSnapshot();
});