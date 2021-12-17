// import getPosts from "../api/github-issues";
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from "./features/posts/postsSlice";
import Nav from "./components/Nav";
import Home from "./views/Home";
import PostPage from "./views/PostPage";
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <main className='main'>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/post/:id" element={<PostPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

  // ?page=1&per_page=10
  // https://api.github.com/repos/facebook/react/issues
