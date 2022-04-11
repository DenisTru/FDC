import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingReviews from '../RatingReviews';

const mockData = [{
  body: 'I really like these pants. Best fit ever!',
  date: '2019-02-18T00:00:00.000Z',
  helpfulness: 5,
  photos: [{ id: 2219422, url: 'https://images.unsplash.com/photo-1542574621-e088a…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3028&q=80' }],
  rating: 5,
  recommend: true,
  response: 'DO YOU LIKE PANTS?',
  review_id: 1155761,
  reviewer_name: 'figuringitout',
  summary: 'These pants are great!',
},
];
const mockCharacteristics = {
  Comfort: { id: 223583, value: '3.6666666666666667' },
  Fit: { id: 223581, value: '3.6666666666666667' },
  Length: { id: 223582, value: '3.6666666666666667' },
  Quality: { id: 223584, value: '3.6666666666666667' },
};
const mockRecommended = { false: '1', true: '2' };
const mockReviewsAverageRating = 3.7;
const mockReviewsNew = {};
const mockReviewsTotal = 3;
const mockRatings = { 2: '1', 4: '1', 5: '1' };
const mockHelpOnClick = () => {
  const data = mockData.slice();
  data.helpfulness = mockData.helpfulness + 1;
  this.setState({ mockData: data });
};
const mockOnSortChange = () => { this.setState({ mockData }); };
const mockOnFieldChange = () => { this.setState({ mockData }); };

describe('RatingReviews', () => {
  test('render a Ratings And Reviews when component shows', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
      helpOnClick={mockHelpOnClick}
      onSortChange={mockOnSortChange}
      onFieldChange={mockOnFieldChange}
    />);
    const hello = screen.getByText(/Ratings And Reviews/);
    expect(hello).toBeInTheDocument();
  });
  test('it should render a correct average rating when component shows', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    const hello = screen.getByText(mockReviewsAverageRating);
    expect(hello).toBeInTheDocument();
  });
  test('it should get correct stars', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    const hello = screen.getByText(/3 stars/);
    expect(hello).toBeInTheDocument();
  });

  test('it should get correct Break Down characteristics', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getByText(/Comfort/)).toBeInTheDocument();
    expect(screen.getByText(/Fit/)).toBeInTheDocument();
    expect(screen.getByText(/Length/)).toBeInTheDocument();
    expect(screen.getByText(/Quality/)).toBeInTheDocument();
  });

  test('it should display correct reviews username', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getByText(mockData[0].reviewer_name)).toBeInTheDocument();
  });
  test('it should display correct reviews summary', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getByText(mockData[0].summary)).toBeInTheDocument();
  });

  test('it should display correct reviews response', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getByText(mockData[0].response)).toBeInTheDocument();
  });

  test('it should render correct reviews conclusion', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getByText(/Great/)).toBeInTheDocument();
  });
  test('it should have one drop down when renders', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getAllByRole('combobox')).toHaveLength(1);
  });

  test('it should have two buttons when renders', () => {
    render(<RatingReviews
      data={mockData}
      ratings={mockRatings}
      characteristics={mockCharacteristics}
      reviewsAverageRating={mockReviewsAverageRating}
      reviewsNew={mockReviewsNew}
      reviewsTotal={mockReviewsTotal}
      recommended={mockRecommended}
    />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
