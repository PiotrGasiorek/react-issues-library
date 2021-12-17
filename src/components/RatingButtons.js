import { useState } from "react";
import FeatherIcon from 'feather-icons-react';

function RatingButtons({ rating }) {
  const [postRating, setPostRating] = useState(rating);
  const increaseRating = () => {
    setPostRating(postRating + 1);
  }
  const decreaseRating = () => {
    setPostRating(postRating - 1);
  }
  return (
    <div className="rating">
      <button className="rating__btn rating__btn--increase" onClick={increaseRating} aria-label="Like this post">
        <FeatherIcon className="rating__btn__icon" icon="thumbs-up" />
      </button>
      <span className="rating__score">{
        postRating > 99 ?
          '+99!!' : 
          postRating < -99 ? 
            '-99!!' : postRating
      }</span>
      <button className="rating__btn rating__btn--decrease" onClick={decreaseRating} aria-label="Dislike this post">
        <FeatherIcon className="rating__btn__icon" icon="thumbs-down" />
      </button>
    </div>
  );
}

export default RatingButtons;