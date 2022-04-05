/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import RatingReviews from './Components/RatingAndReviews/RatingReviews';
import getReviews from './Components/RatingAndReviews/data.js';
import InfoPanel from './Components/Overview/infoPanel.jsx';

const root = createRoot(document.getElementById('root'));

const mockProduct = {
  id: 1,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140',
};

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
      currentSelectedStyle: 411534,
    };
  }

  componentDidMount() {
    // const {
    //   // reviewsPage,
    //   // reviewsCount,
    //   // reviewsSort,
    //   productId,
    // } = this.state;

    // getReviews(reviewsPage, reviewsCount, reviewsSort, productId).then((res) => {
    //   let { data } = res;
    //   data = data.results;
    //   // console.log(data);
    //   this.setState({ reviews: data, isLoading: false });
    // });
    // getReviews(reviewsPage + 1, reviewsCount, reviewsSort, productId).then((res) => {
    //   let { data } = res;
    //   data = data.results;
    //   this.setState({ reviewsNextPage: data, isLoading: false });
    // });
  }

  styleOnClick = (selectedProduct) => {
    this.setState({
      currentSelectedStyle: selectedProduct,
    });
    //style changes but does not re render
  };

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
      this.setState({ reviews, reviewsNextPage: data, reviewsPage });
    });
  };

  render() {
    const {
      reviews, isLoading, reviewsNextPage, currentSelectedStyle,
    } = this.state;
    if (isLoading) {
      return (
        <InfoPanel
          product={mockProduct}
          currentStyle={currentSelectedStyle}
          handleClick={this.styleOnClick}
        />
      );
      // return (
      //   <div>App is Loading</div>
      // );
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
