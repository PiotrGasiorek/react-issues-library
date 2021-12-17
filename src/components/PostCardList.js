import PostCard from "./PostCard";

function PostCardList({ postsData }) {
  return (
    <div className="cards-wrapper">
      {postsData.posts && postsData.posts.map(post => {
        return (
          <PostCard 
            title={post.title} 
            id={post.id} 
            date={post.date} 
            key={post.id}
            rating={post.rating} 
          />
        )
      })}
      
    </div>
  );
}

export default PostCardList;