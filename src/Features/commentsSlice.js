import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        addComment: (state, action) => [...state,action.payload],
        clearComments: state => []
    }
});

export const commentsSelector = (state) => state.comments;

export const { addComment,clearComments } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
