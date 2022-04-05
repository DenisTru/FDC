/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import RatingReviews from './Components/RatingAndReviews/RatingReviews';
import getReviews from './Components/RatingAndReviews/data.js';
import getMetaReviews from './Components/RatingAndReviews/metaData';

const root = createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      reviews: [],
      reviewsMeta: [],
      reviewsPage: 1,
      reviewsCount: 3,
      reviewsSort: 'helpful',
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
      this.setState({ reviews: data, isLoading: false });
    });
    getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      return data;
      // this.setState({ reviewsNextPage: data, isLoading: false });
    }).then((reviewsData) => {
      getMetaReviews(productId).then((meta) => {
        // console.log(meta);
        const { ratings, recommended, characteristics } = meta.data;
        const { Quality } = characteristics;
        let { reviewsMeta } = this.state;
        reviewsMeta = { Quality, recommended, ratings };
        // console.log(reviewsMeta);
        this.setState({ reviewsMeta, reviewsNextPage: reviewsData, isLoading: false });
      });
    });
  }

  // Reviews And Ratings click on help button
  helpOnClick = (id) => {
    const { reviews } = this.state;
    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].review_id === id) {
        reviews[i].helpfulness += 1;
      }
    }
    this.setState({ reviews });
  };

  // Reviews And Ratings click on more reviews button
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
      // console.log('data', data, 'next', reviewsNextPage);
      this.setState({ reviews, reviewsNextPage: data, reviewsPage });
    });
  };

  // Revews And Ratings sort options
  onSortChange = (sortType) => {
    const {
      reviewsCount,
      productId,
    } = this.state;
    let { reviews, reviewsPage, reviewsSort } = this.state;
    reviewsSort = sortType;
    reviewsPage = 1;
    getReviews(reviewsPage, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      reviews = data;
      // console.log('@@@', reviews);
      return reviews;
    }).then((newReviews) => {
      getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
        let { data } = res;
        data = data.results;
        this.setState({
          reviews: newReviews, reviewsNextPage: data, reviewsPage, reviewsSort,
        });
      });
    });
  };

  render() {
    const {
      reviews, isLoading, reviewsNextPage, reviewsMeta,
    } = this.state;
    const { Quality, ratings, recommended } = reviewsMeta;
    if (isLoading) {
      return (
        <div>App is Loading</div>
      );
    }
    return (
      <div>
        <RatingReviews
          Quality={Quality}
          ratings={ratings}
          recommended={recommended}
          reviewsNextPage={reviewsNextPage}
          helpOnClick={this.helpOnClick}
          data={reviews}
          moreReviewsOnClick={this.moreReviewsOnClick}
          onSortChange={this.onSortChange}
        />
      </div>
    );
  }
}

root.render(<App />);
