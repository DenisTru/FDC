/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import RatingReviews from './Components/RatingAndReviews/RatingReviews';
import getReviews from './Components/RatingAndReviews/data.js';

const root = createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      reviews: [],
      reviewsPage: 1,
      reviewsCount: 2,
      reviewsSort: 'newest',
      reviewsNextPage: [],
      productId: 66643,
    };
  }

  componentDidMount() {
    const {
      reviewsPage,
      reviewsCount,
      reviewsSort,
      productId,
    } = this.state;

    getReviews(reviewsPage, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      // console.log(data);
      this.setState({ reviews: data, isLoading: false });
    });
    getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      this.setState({ reviewsNextPage: data, isLoading: false });
    });
  }

  helpOnClick = (id) => {
    const { reviews } = this.state;
    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].review_id === id) {
        reviews[i].helpfulness += 1;
      }
    }
    this.setState({ reviews });
  };

  moreReviewsOnClick = () => {
    const {
      reviewsCount,
      reviewsSort,
      productId,
      reviewsNextPage,
    } = this.state;
    let { reviews, reviewsPage } = this.state;
    reviewsPage += 1;
    reviews = reviews.concat(reviewsNextPage);
    getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      console.log('data', data, 'next', reviewsNextPage);
      this.setState({ reviews, reviewsNextPage: data, reviewsPage });
    });
  };

  render() {
    const { reviews, isLoading, reviewsNextPage } = this.state;
    if (isLoading) {
      return (
        <div>App is Loading</div>
      );
    }
    return (
      <div>
        <RatingReviews
          reviewsNextPage={reviewsNextPage}
          helpOnClick={this.helpOnClick}
          data={reviews}
          moreReviewsOnClick={this.moreReviewsOnClick}
        />
      </div>
    );
  }
}

root.render(<App />);
