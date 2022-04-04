import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoPanel from '../infoPanel';

const mockProduct = {
  id: 1,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140',
};

const mockProductNoDESC = {
  id: 1,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: '',
  category: 'Jackets',
  default_price: '140',
};

it('shows a default message if there is an empty object passed in', () => {
  // Your tests come here...
  render(<InfoPanel product={{}} />);
  // find element
  const text = screen.getByText('No Item to display');
  expect(text).toBeInTheDocument();
});

it('shows a default message if there is no product passed in', () => {
  // Your tests come here...
  render(<InfoPanel />);
  // find element
  const text = screen.getByText('No Item to display');
  expect(text).toBeInTheDocument();
});

it('renders the product category & title with correct id & name', () => {
  render(<InfoPanel product={mockProduct} />);
  const id = screen.getByText(mockProduct.category);
  const name = screen.getByText(mockProduct.name);
  expect(id).toBeInTheDocument();
  expect(id).toHaveTextContent(mockProduct.category);
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent(mockProduct.name);
});

it('does not render a description div if a description is not avaiable', () => {
  render(<InfoPanel product={mockProductNoDESC} />);
  const overView = screen.queryByText(mockProduct.description);
  expect(overView).not.toBeInTheDocument();
});

it('renders description if it is available', () => {
  render(<InfoPanel product={mockProduct} />);
  const overView = screen.getByText(mockProduct.description);

  if (mockProduct.overview) {
    expect(overView).toBeInTheDocument();
    expect(overView).toHaveTextContent(mockProduct.description);
  }
});
