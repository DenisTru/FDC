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

it('OutfitList -> Displays related list card on button click', () => {
  act(() => {
    render(<App />, container);

    Simulate.click(container.querySelector('#add-outfit-button'));
  });

  expect(container.querySelector('#outfit-card')).toBeTruthy();
});
