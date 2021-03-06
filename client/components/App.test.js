// This is just a simple example test file that can be modified later or deleted.

import React from 'react'; // Test files must import react
import {shallow} from 'enzyme'; // import any functions you are using from enzyme
import App from './App.jsx'; // import what ever component you are testing.
import ReviewsWidget from './ReviewsWidget.jsx';
import Overview from './Overview';
import QnAs from './QnAs/QnAs.jsx';
import RelatedProducts from './RelatedProducts';
import BrowserRouter from 'react-router-dom';

describe('App should ', () => {
  let app;
  beforeAll(() => {
    app = shallow(<App />, {disableLifecycleMethods: true});
  });

  afterAll(() => {
    app.unMount();
  });

  test('intialize state with all product keys', () => {

    let productState = {
      id: null,
      name: '',
      slogan: '',
      description: '',
      category: '',
      'default_price': '',
      features: [],
    };

    expect(app.state().product).toEqual(expect.objectContaining(productState));

  });

  test('intialize state with all reviewMetaData keys', () => {

    let reviewMetaData = {
        'product_id': null,
        ratings: {},
        recommended: {},
        characteristics: {},
      };

    expect(app.state().reviewMetaData).toEqual(expect.objectContaining(reviewMetaData));

  });

  test('render the Overview Widget', () => {
    expect(app.find('Overview').length).toEqual(1);
  });

  test('render the Related Products Widget', () => {
    expect(app.find('RelatedProducts').length).toEqual(1);
  });

  test('render the Questions & Answers Widget', () => {
    expect(app.find('QnAs').length).toEqual(1);
  });

  test('render the Reviews Widget', () => {
    expect(app.find('ReviewsWidget').length).toEqual(1);
  });

});
