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
      reviewsSort: 'helpful',
      reviewsTotal: 0,
      reviewsAverageRating: 0,
      reviewsNew: {},
      productId: 66645,
    };
  }

  componentDidMount() {
    const {
      reviewsSort,
      productId,
    } = this.state;

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
        reviewsTotal: count,
        reviewsAverageRating: ratingValue,
        reviewsMeta,
      });
      return count;
    })
      .then((count) => {
        getReviews(1, count, reviewsSort, productId)
          .then((res) => {
            let { data } = res;
            data = data.results;
            this.setState({ reviews: data, isLoading: false });
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

  // Revews And Ratings sort options
  onSortChange = (sortType) => {
    const {
      reviewsTotal,
      productId,
    } = this.state;
    getReviews(1, reviewsTotal, sortType, productId)
      .then((res) => {
        const data = res.data.results;
        this.setState({ reviews: data, reviewsSort: sortType });
      });
  };

  onFieldChange = (value, fieldName) => {
    const { reviewsNew } = this.state;
    reviewsNew[fieldName] = value;
    this.setState({ reviewsNew });
  };

  render() {
    const {
      reviews, isLoading, reviewsMeta,
      reviewsAverageRating, reviewsNew, reviewsTotal,
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
          helpOnClick={this.helpOnClick}
          data={reviews}
          moreReviewsOnClick={this.moreReviewsOnClick}
          onSortChange={this.onSortChange}
          onFieldChange={this.onFieldChange}
          reviewsAverageRating={reviewsAverageRating}
          reviewsNew={reviewsNew}
          reviewsTotal={reviewsTotal}
        />
      </div>
    );
  }
}

root.render(<App />);
