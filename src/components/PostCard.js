import { Link } from "react-router-dom";
import RatingButtons from "./RatingButtons";

function PostCard({ title, id, date, rating }) {
  const postPageUrl = `post/${id}`;
  return (
    <div className="card fade-in-bottom">
      <time className="card__date">{date}</time>
      <h3 className="card__title">{title}</h3>
      {/* <p className="card__id">{id}</p> */}
      <RatingButtons rating={rating} id={id}/>
      <Link className="card__link" to={postPageUrl}>Show issue</Link>
    </div>
  );
}

export default PostCard;