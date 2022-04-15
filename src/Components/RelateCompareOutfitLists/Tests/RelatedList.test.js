import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import App from '../../../index';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('RelatedList -> Maintains display of a related item card on button click', () => {
  act(() => {
    render(<App />, container);

    Simulate.click(container.querySelector('#change-product'));
  });

  expect(container.querySelector('#product-cards')).toBeTruthy();
});
