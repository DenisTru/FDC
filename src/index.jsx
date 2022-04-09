/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import RatingReviews from './Components/RatingAndReviews/RatingReviews';
import getReviews from './Components/RatingAndReviews/data.js';
import Overview from './Components/Overview/Overview';
import getMetaReviews from './Components/RatingAndReviews/metaData';
import helpPut from './Components/RatingAndReviews/helpPut';
import OutfitList from './Components/RelateCompareOutfitLists/Outfit-List/outfitList';
import RelatedList from './Components/RelateCompareOutfitLists/Related-List/RelatedList';
import CompareModal from './Components/RelateCompareOutfitLists/Compare-Table/compareModal';
import { getProductStyles } from './Components/Overview/data';
import {
  getRelatedProductIds, getRelatedProductInfo, getRelatedProductStyles, getProductInfo,
} from './Components/RelateCompareOutfitLists/data';

const root = createRoot(document.getElementById('root'));

const mockProduct = {
  id: 66642,
  campus: 'hr-rfc',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2022-03-31T21:13:15.875Z',
  updated_at: '2022-03-31T21:13:15.875Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],

};

const mockItemStyles = [
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
  {
    style_id: 411535,
    name: 'Desert Brown & Tan',
    original_price: '140.00',
    sale_price: null,
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
      },
    ],
    skus: {
      2390363: {
        quantity: 8,
        size: 'XS',
      },
      2390364: {
        quantity: 16,
        size: 'S',
      },
      2390365: {
        quantity: 17,
        size: 'M',
      },
      2390366: {
        quantity: 10,
        size: 'L',
      },
      2390367: {
        quantity: 15,
        size: 'XL',
      },
      2390368: {
        quantity: 6,
        size: 'XXL',
      },
    },
  },
  {
    style_id: 411536,
    name: 'Ocean Blue & Grey',
    original_price: '140.00',
    sale_price: '100.00',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      },
    ],
    skus: {
      2390369: {
        quantity: 8,
        size: 'XS',
      },
      2390370: {
        quantity: 16,
        size: 'S',
      },
      2390371: {
        quantity: 17,
        size: 'M',
      },
      2390372: {
        quantity: 10,
        size: 'L',
      },
      2390373: {
        quantity: 15,
        size: 'XL',
      },
      2390374: {
        quantity: 6,
        size: 'XXL',
      },
    },
  },
  {
    style_id: 411537,
    name: 'Digital Red & Black',
    original_price: '140.00',
    sale_price: null,
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
        url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ],
    skus: {
      2390375: {
        quantity: 8,
        size: 'XS',
      },
      2390376: {
        quantity: 16,
        size: 'S',
      },
      2390377: {
        quantity: 17,
        size: 'M',
      },
      2390378: {
        quantity: 10,
        size: 'L',
      },
      2390379: {
        quantity: 15,
        size: 'XL',
      },
      2390380: {
        quantity: 6,
        size: 'XXL',
      },
    },
  },
  {
    style_id: 411538,
    name: 'Sky Blue & White',
    original_price: '140.00',
    sale_price: '100.00',
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
    ],
    skus: {
      2390381: {
        quantity: 8,
        size: 'XS',
      },
      2390382: {
        quantity: 16,
        size: 'S',
      },
      2390383: {
        quantity: 17,
        size: 'M',
      },
      2390384: {
        quantity: 10,
        size: 'L',
      },
      2390385: {
        quantity: 15,
        size: 'XL',
      },
      2390386: {
        quantity: 6,
        size: 'XXL',
      },
    },
  },
  {
    style_id: 411539,
    name: 'Dark Grey & Black',
    original_price: '170.00',
    sale_price: null,
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
      },
    ],
    skus: {
      2390387: {
        quantity: 8,
        size: 'XS',
      },
      2390388: {
        quantity: 16,
        size: 'S',
      },
      2390389: {
        quantity: 17,
        size: 'M',
      },
      2390390: {
        quantity: 10,
        size: 'L',
      },
      2390391: {
        quantity: 15,
        size: 'XL',
      },
      2390392: {
        quantity: 6,
        size: 'XXL',
      },
    },
  },
];

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
      currentSelectedStyle: mockItemStyles[0],
      product: mockProduct,
      productStyles: mockItemStyles,
      relatedProducts: [],
      relatedProductStyles: [],
      relatedProductRatings: [],
      outfitProducts: [],
      outfitProductIDs: {},
      compare: false,
      productToCompare: {},
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
        const ratingValue = sum / count;
        this.setState({
          reviewsMeta,
          reviewsNextPage: reviewsData,
          isLoading: false,
          reviewsAverageRating: ratingValue,
        });
      });
    });
    getProductInfo(productId)
      .then((res) => {
        const { data } = res;
        this.setState({
          product: data,
        });
        return res.data.id;
      })
      .then((id) => {
        getProductStyles(id)
          .then((styleData) => {
            const styles = styleData.data.results;
            this.setState({
              productStyles: styles,
            });
          });
      })
      .then(() => {
        // Get related product ID's of current product
        getRelatedProductIds(productId)
          .then((res) => {
            const { data } = res;
            return data;
          })
          .then((relatedProductIDs) => {
            // Get related product information of current product
            const products = relatedProductIDs.map(
              (relatedProductID) => getRelatedProductInfo(relatedProductID),
            );
            Promise.all(products)
              .then((result) => {
                const productInfo = result.map((obj) => obj.data);
                this.setState({
                  relatedProducts: productInfo,
                });
              });
            // Get related product styles of current product
            const productStyles = relatedProductIDs.map(
              (relatedProductID) => getRelatedProductStyles(relatedProductID),
            );
            Promise.all(productStyles)
              .then((result) => {
                const relatedProductStyles = result.map((obj) => obj.data.results);
                this.setState({
                  relatedProductStyles,
                });
              });
            // Get related product ratings of current product
            const productRatings = relatedProductIDs.map(
              (relatedProductID) => getMetaReviews(relatedProductID),
            );
            Promise.all(productRatings)
              .then((result) => {
                const relatedProductRatings = result.map((obj) => obj.data.ratings);
                return relatedProductRatings;
              })
              .then((ratings) => {
                const relatedProductRatings = ratings.map((obj) => {
                  const keys = Object.keys(obj);
                  const values = Object.values(obj);
                  let sum = 0;
                  for (let i = 0; i < keys.length; i += 1) {
                    sum += keys[i] * values[i];
                  }
                  return sum / keys.length || 0;
                });
                this.setState({
                  relatedProductRatings,
                });
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  styleOnClick = (selectedProduct) => {
    this.setState({
      currentSelectedStyle: selectedProduct,
    });
  };

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

  // Relate Compare Outfit Lists - Check if product is in outfit
  productIsInOutfit = (productID) => {
    const { outfitProductIDs } = this.state;
    return (outfitProductIDs[productID]);
  };

  // Relate Compare Outfit Lists - Handle 'add to outfit' click
  addToOutfit = () => {
    const { productId } = this.state;
    if (!this.productIsInOutfit(productId)) {
      const { product, outfitProducts, outfitProductIDs } = this.state;
      const addsOutfit = outfitProducts;
      addsOutfit.push(product);
      const addsProductID = outfitProductIDs;
      addsProductID[productId] = productId;
      this.setState({
        outfitProducts: addsOutfit,
        outfitProductIDs: addsProductID,
      });
    }
  };

  // Relate Compare Outfit Lists - Handle 'remove from outfit' click
  removeFromOutfit = (productID) => {
    const { outfitProducts, outfitProductIDs } = this.state;
    const removesProductID = outfitProductIDs;
    delete removesProductID[productID];
    const removesProduct = outfitProducts;
    for (let i = 0; i < removesProduct.length; i += 1) {
      const product = removesProduct[i];
      if (product.id === productID) {
        removesProduct.splice(i, 1);
        break;
      }
    }
    this.setState({
      outfitProducts: removesProduct,
      outfitProductIDs: removesProductID,
    });
  };

  // Relate Compare Outfit Lists - Handle 'compare button' click
  startComparing = (product) => {
    this.setState({
      compare: true,
      productToCompare: product,
    });
  };

  // Relate Compare Outfit Lists - Handle 'exit compare button' click
  stopComparing = () => {
    this.setState({
      compare: false,
    });
  };

  render() {
    const {
      reviews, isLoading, reviewsNextPage, reviewsMeta,
      reviewsAverageRating,
      currentSelectedStyle, productId, productStyles, product,
      relatedProducts, relatedProductStyles, relatedProductRatings,
      outfitProducts, compare, productToCompare,
    } = this.state;
    const { characteristics, ratings, recommended } = reviewsMeta;
    if (isLoading) {
      return (
        <div>App is Loading</div>
      );
    }
    return (
      <div>
        <Overview
          productId={productId}
          product={product}
          currentStyle={currentSelectedStyle}
          handleClick={this.styleOnClick}
          productStyles={productStyles}
          reviewsAverageRating={reviewsAverageRating}
        />
        <CompareModal
          compare={compare}
          stopComparing={this.stopComparing}
          productToCompare={productToCompare}
          currentProduct={product}
        />
        <RelatedList
          product={product}
          currentSelectedStyle={currentSelectedStyle}
          productStyles={productStyles}
          reviewsAverageRating={reviewsAverageRating}
          relatedProducts={relatedProducts}
          relatedProductStyles={relatedProductStyles}
          relatedProductRatings={relatedProductRatings}
          startComparing={this.startComparing}
        />
        <OutfitList
          outfitProducts={outfitProducts}
          addToOutfit={this.addToOutfit}
          removeFromOutfit={this.removeFromOutfit}
          relatedProductRatings={relatedProductRatings}
          productStyles={productStyles}
        />
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
        />
      </div>
    );
  }
}

root.render(<App />);
