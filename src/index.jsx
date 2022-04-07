/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import RatingReviews from './Components/RatingAndReviews/RatingReviews';
import getReviews from './Components/RatingAndReviews/data.js';
import getMetaReviews from './Components/RatingAndReviews/metaData';
import helpPut from './Components/RatingAndReviews/helpPut';
import CompareList from './Components/Relate-Compare-Lists/compareList';
import RelatedList from './Components/Relate-Compare-Lists/relatedList';

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
      reviewsAverageRating: 0,
      reviewsNew: {},
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
      // console.log(res);
      this.setState({ reviews: data, isLoading: false });
    });
    getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
      let { data } = res;
      data = data.results;
      return data;
    }).then((reviewsData) => {
      getMetaReviews(productId).then((meta) => {
        const { ratings, recommended, characteristics } = meta.data;
        let { reviewsMeta } = this.state;
        reviewsMeta = { characteristics, recommended, ratings };
        const sum = Object.entries(ratings).slice().reduce((res, x) => {
          // eslint-disable-next-line no-param-reassign
          res += Number(x[0]) * Number(x[1]);
          return res;
        }, 0);
        const count = Object.entries(ratings).slice().reduce((res, x) => {
          // eslint-disable-next-line no-param-reassign
          res += Number(x[1]);
          return res;
        }, 0);
        const ratingValue = Number((sum / count).toFixed(1));
        this.setState({
          reviewsMeta,
          reviewsNextPage: reviewsData,
          isLoading: false,
          reviewsAverageRating: ratingValue,
        });
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
    helpPut(id);
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

  onFieldChange = (value, fieldName) => {
    const { reviewsNew } = this.state;
    reviewsNew[fieldName] = value;
    // console.log(value, fieldName);
    this.setState({ reviewsNew });
  };

  render() {
    const {
      reviews, isLoading, reviewsNextPage, reviewsMeta,
      reviewsAverageRating, reviewsNew,
    } = this.state;
    const { characteristics, ratings, recommended } = reviewsMeta;
    if (isLoading) {
      return (
        <div>App is Loading</div>
      );
    }
    return (
      <div>
        <RelatedList />
        <CompareList />
        <RatingReviews
          characteristics={characteristics}
          ratings={ratings}
          recommended={recommended}
          reviewsNextPage={reviewsNextPage}
          helpOnClick={this.helpOnClick}
          data={reviews}
          moreReviewsOnClick={this.moreReviewsOnClick}
          onSortChange={this.onSortChange}
          onFieldChange={this.onFieldChange}
          reviewsAverageRating={reviewsAverageRating}
          reviewsNew={reviewsNew}
        />
      </div>
    );
  }
}

root.render(<App />);
