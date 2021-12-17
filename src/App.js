import { useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts, getPostsFromLocalStorage } from "./features/posts/postsSlice";
import Nav from "./components/Nav";
import Home from "./views/Home";
import PostPage from "./views/PostPage";
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!localStorage.getItem('posts')){
      dispatch(getPosts());
    } else{
      dispatch(getPostsFromLocalStorage()); 
    }
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        <main className='main'>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/post/:id" element={<PostPage/>}/>
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;

  // ?page=1&per_page=10
  // https://api.github.com/repos/facebook/react/issues
