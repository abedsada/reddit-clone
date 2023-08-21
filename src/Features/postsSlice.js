import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => [...state,action.payload],
        clearPosts: state => [],
        flipCond: (state, action) => {
            state[state.findIndex(i=>i.id===action.payload)].cond=!state[state.findIndex(i=>i.id===action.payload)].cond;
        }
    }
});

export const postsSelector = (state) => state.posts;

export const { addPost,clearPosts,flipCond } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
