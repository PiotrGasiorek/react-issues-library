import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    // increment: (state) => {
    //   console.log('Action working');
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = applyFakeRating(action.payload);
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },
},
});

export const { increment } = postsSlice.actions;

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = postsSlice.actions

export default postsSlice.reducer