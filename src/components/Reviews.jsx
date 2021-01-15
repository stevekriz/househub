import React from 'react';
// import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: [],
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  // getReviews() {
  //   axios.get('/api/reviews/1')
  //     .then(({ data }) => this.setState({
  //       reviews: data,
  //     }));
  // }

  render() {
    return (
      <h1>Reviews</h1>
    );
  }
}

export default Reviews;
