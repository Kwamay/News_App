import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../component/Nav';

describe('Nav', () => {
  test('renders Nav component', () => {
    const output = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});