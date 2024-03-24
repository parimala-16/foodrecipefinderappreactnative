import React from 'react';
import search from './search';
import { render, fireEvent } from '@testing-library/react-native';

describe('search', () => {
  
  test('updating search value while giving the input', () => {
    const { getPlaceholdertext } = render(<search get_Query={() => {}} />);
    const input = getPlaceholdertext('Search any Recipe');

    fireEvent.changeText(input, 'Sandwich');
    expect(input.props.value).toBe('Sandwich');

  });

  test('when search button is clicked then get_Query should be called.', () => {
    const mock = jest.fn();
    const { getText, getPlaceholdertext } = render(<search get_Query={mock} />);
    const input = getPlaceholdertext('Search any Recipe');
    const button = getText('Search');

    fireEvent.changeText(input, 'Burger');
    fireEvent.press(button);

    expect(mock).toHaveBeenCalledWith('Burger');
    
  });
});
