import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function PostPage({ posts }) {
  const { id } = useParams();
  const [post, setPost] = useState({});
  
  useEffect(() => {
    // setPost(posts.filter(post => post.id === id));
    console.log(posts);
    console.log(posts.filter(post => post.id !== id));
    console.log(id);
  }, [post])

  return (
    <div>
      <h1>PostPage</h1>
      <p>{posts ? 'Loaded' : 'Loading'}</p>
    </div>
  );
}

export default PostPage;
