import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '../../../src/components';

test('renders header correctly', () => {
  const onPress = jest.fn();
  const tree = renderer.create(<Header label="Information"/>).toJSON();
  expect(tree).toMatchSnapshot();
});