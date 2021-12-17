import { useState } from "react";
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from "react-redux";
import { updatePostsRating } from "../features/posts/postsSlice";


function RatingButtons({ rating, id }) {
  const dispatch = useDispatch();
  const [postRating, setPostRating] = useState(rating);
  const updateRating = (number) => {
    dispatch(updatePostsRating({id, postRating, number}));
    setPostRating(postRating + number);
  }
  return (
    <div className="rating">
      <button className="rating__btn rating__btn--increase" onClick={() => updateRating(1)} aria-label="Like this post">
        <FeatherIcon className="rating__btn__icon" icon="thumbs-up" />
      </button>
      <span className="rating__score">{
        postRating > 99 ?
          '+99!!' : 
          postRating < -99 ? 
            '-99!!' : postRating
      }</span>
      <button className="rating__btn rating__btn--decrease" onClick={() => updateRating(-1)} aria-label="Dislike this post">
        <FeatherIcon className="rating__btn__icon" icon="thumbs-down" />
      </button>
    </div>
  );
}

export default RatingButtons;