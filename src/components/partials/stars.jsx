import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;