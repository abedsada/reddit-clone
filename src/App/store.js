import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../Features/postsSlice';
import { commentsReducer } from '../Features/commentsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
});
