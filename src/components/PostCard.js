import { Link } from "react-router-dom";

function PostCard({ title, id, date }) {
  const postPageUrl = `post/${id}`;
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__id">{id}</p>
      <time className="card__date">{date}</time>
      <Link className="card__link" to={postPageUrl}>Show issue</Link>
    </div>
  );
}

export default PostCard;