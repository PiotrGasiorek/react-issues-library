import RatingButtons from "./RatingButtons";

function PostPageContent({ post }) {
  return (
    <div className='post-content'>
      <time className='post-content__date'>{post.date}</time>
      <h1 className='post-content__title'>{post.title}</h1>
      <p className='post-content__paragraph'>{post.paragraph}</p>
      <RatingButtons rating={post.rating}/>
  </div>
  );
}

export default PostPageContent;