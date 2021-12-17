import { useSelector } from 'react-redux';
import PostCardList from '../components/PostCardList';

function Home() {
  const { posts } = useSelector(state => state);
  return (
    <>
      <h1 className='hp__title fade-in-left'>Feel free to checkout some of our posts with react issues from official Github API</h1>
      <PostCardList postsData={posts}/>
    </>
  );
}

export default Home;