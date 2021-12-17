import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const applyFakeRating = (array) => {
  return array.map(post => {
    post.rating = randomInteger(-300, 300);
    return post
  })
}

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        return await axios.get('https://my-json-server.typicode.com/PiotrGasiorek/blog-app/posts?_page=1&_limit=10')
            .then(res => res.data)
            .catch(err => {
              console.log(err);
            })
        }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null
  },
  reducers: {
    getPostsFromLocalStorage: (state) => {
      state.posts = JSON.parse(localStorage.getItem('posts'));
    },
    
    updatePostsRating: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      state.posts[index].rating = action.payload.postRating + action.payload.number;
      localStorage.setItem('posts', JSON.stringify(state.posts));
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      const postsWithRating = applyFakeRating(action.payload);
      localStorage.setItem('posts', JSON.stringify(postsWithRating));
      state.posts = postsWithRating;
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },
},
});

export const { getPostsFromLocalStorage, updatePostsRating } = postsSlice.actions;
export default postsSlice.reducer