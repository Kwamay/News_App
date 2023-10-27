import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Details from '../component/Details';
import store from '../redux/store';

describe('Details', () => {
  it('should render the about page with correct heading and text', () => {
    const output = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should render a link with a back arrow icon', () => {
    const output = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });
});
