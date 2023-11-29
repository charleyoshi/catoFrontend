// This file is not used
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videoID: '',
    comments: [],
    replies:[]
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState: initialState,
    reducers: {
        setVideoID: (state, action) =>{
            state.videoID = action.payload
        },
        setComments: (state, action) => {
            // state.comments += 1
            state.comments = action.payload
        },
        createComment: (state, action) => {
            state.comments = [action.payload, ...state.comments]
        },
        setReplies:(state, action) =>{
            state.replies = action.payload
        },
        createReply : (state, action) =>{
            state.replies = [action.payload, ...state.replies]
        }
    },
})

// Action creators are generated for each case reducer function
export const { setVideoID, setComments, createComment, setReplies, createReply } = commentSlice.actions

export default commentSlice.reducer