import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from './components/header';
import Ratings from './components/ratings';
import Reviews from './components/reviews';
import Footer from './components/footer';

const Loading = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: safe center;
  align-items: safe center;
  padding: 0 80px;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const TopDummy = styled.div`
  order: 1;
  height: 500px;
`;

const TopLine = styled.div`
  order: 2;
  width: 1128px;
  border-top: 1px solid rgb(221, 221, 221);
`;

const ReviewsContainer = styled.div`
  order: 3;
  width: 1128px;
  padding: 48px 0;
`;

const BottomLine = styled.div`
  order: 4;
  width: 1128px;
  border-top: 1px solid rgb(221, 221, 221);
`;

const BottomDummy = styled.div`
  order: 5;
  height: 500px;
`;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();

  const getReviews = () => {
    axios.get('/api/reviews/1')
      .then(({ data }) => {
        setReviews(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <AppContainer>
      <TopDummy />
      <TopLine />
      <ReviewsContainer>
        <Header
          averageRating={reviews.averageRating}
          reviewCount={reviews.reviewCount}
        />
        <Ratings ratings={reviews.ratings} />
        <Reviews reviews={reviews.reviews} />
        <Footer reviewCount={reviews.reviewCount} />
      </ReviewsContainer>
      <BottomLine />
      <BottomDummy />
    </AppContainer>
  );
};

export default App;
