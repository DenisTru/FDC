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

const mockItemStyles = {
  product_id: '1',
  results: [
    {
      style_id: 411534,
      name: 'Forest Green & Black',
      original_price: '140.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        2390357: {
          quantity: 8,
          size: 'XS',
        },
        2390358: {
          quantity: 16,
          size: 'S',
        },
        2390359: {
          quantity: 17,
          size: 'M',
        },
        2390360: {
          quantity: 10,
          size: 'L',
        },
        2390361: {
          quantity: 15,
          size: 'XL',
        },
        2390362: {
          quantity: 4,
          size: 'XL',
        },
      },
    },
  ],
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
