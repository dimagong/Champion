import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import {ArticlesScreen} from './ArticlesScreen';

const mockFn = jest.fn();
const component = (
  <ArticlesScreen
    route={{
      params: {
        title: 'The best players of the previous game',
        content: 'Junior players received the best marks',
        img: 'ui/images/reward.jpg',
      },
    }}
    navigation={mockFn}
  />
);

describe('Testing ArticleScreen', () => {
  test('Renders correctly', () => {
    const content = renderer.create(component).toJSON();
    expect(content).toMatchSnapshot();
  });
  test('Page contains properly messages', () => {
    render(component);
    const contentPlayer = screen.getByText(
      'Junior players received the best marks',
    );
    const contentTitle = screen.getByText(
      'The best players of the previous game',
    );
    expect(contentPlayer).toBeTruthy();
    expect(contentTitle).toBeTruthy();
  });
});
