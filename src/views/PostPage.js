import PostPageContent from "../components/PostPageContent";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function PostPage() {
  const { id } = useParams();
  let currentPost;
  const posts = useSelector(state => state.posts);
  const getCurrentPostData = () => {
    currentPost = posts.posts.find(post => post.id === parseInt(id));
  }

  if(posts.posts){
    getCurrentPostData();
  }

  return (
    <>
      {currentPost && <PostPageContent post={currentPost}/>}
    </>
  );
}

export default PostPage;
