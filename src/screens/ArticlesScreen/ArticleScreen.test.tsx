import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';

import {ArticlesScreen} from './ArticlesScreen';

describe('Testing ArticleScreen', () => {
  test('Page contains the header and 10 items', async () => {
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
    render(component);
    // const header = await screen.findByText('champion');
    // expect(header).toBeOnTheScreen();

    //await component.debug();
    screen.debug();
  });
});
