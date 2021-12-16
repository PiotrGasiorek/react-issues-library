import PostCard from "./PostCard";

function PostCardList({ posts }) {
  const isDataLoading = posts.length === 0;
  return (
    <div className="cardsWrapper">
      {isDataLoading ? 'Loading' : posts.map(post => {
    return (
      <PostCard 
        title={post.title} 
        id={post.id} 
        date={post.date} 
        key={post.id}
      />
    )
  })}
      
    </div>
  );
}

export default PostCardList;