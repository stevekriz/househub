import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { get } from 'axios';

import Header from './components/Header';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  align-items: center;
  margin: 0 80px;
  color: rgb(34, 34, 34);
  @media (max-width: 1128px) {
    margin: 0 40px;
  }
  @media (max-width: 730px) {
    margin: 0 24px;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  max-width: 1128px;
  padding: 48px 0;
  box-sizing: border-box;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  margin: 500px 0;
  @media (max-width: 730px) {
    padding: 32px 0;
  }
`;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(1280);

  const getReviews = () => {
    const random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    get(`/api/reviews/${random}`)
      .then(({ data }) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => { throw new Error(err); });
  };
  const updateViewPortWidth = () => setViewPortWidth(window.innerWidth);

  useEffect(() => {
    getReviews();
    window.addEventListener('resize', updateViewPortWidth);
    updateViewPortWidth();

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  }, [viewPortWidth]);

  const openModal = () => setDisplayModal(true);
  const closeModal = () => setDisplayModal(false);

  if (isLoading) {
    return <AppContainer>Loading...</AppContainer>;
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ReviewsContainer id="reviews">
          <Header averageRating={reviews.averageRating} reviewCount={reviews.reviewCount} />
          <Ratings ratings={reviews.ratings} />
          <Reviews reviews={reviews.reviews} viewPortWidth={viewPortWidth} />
          <Footer reviewCount={reviews.reviewCount} openModal={openModal} />
        </ReviewsContainer>
        <Modal
          displayModal={displayModal}
          reviews={reviews}
          closeModal={closeModal}
          viewPortWidth={viewPortWidth}
        />
      </AppContainer>
    </>
  );
};

export default App;
