import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getBible from "../services/bible"

export const fetchBibleContent = createAsyncThunk(
    'get/bibleContent',
    async (param, thunkApi) => {
        const books = thunkApi.getState().bible?.books
        if (books.length) return books
        const response = await getBible()
        return response
    },
)

const initialState = {
    error: '',
    loading: false,
    books: [],
    currentBook: null,
    currentChapter: null,
}

export const bibleSlice = createSlice({
    name: 'bible',
    initialState,
    reducers: {
        setCurrentBook: (state, { payload }) => {
            state.currentBook = payload
        },
        setCurrentChapter: (state, { payload }) => {
            state.currentChapter = payload
        }
    },
    extraReducers:  (builder) => {
        builder.addCase(fetchBibleContent.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
        }),
        builder.addCase(fetchBibleContent.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBibleContent.rejected, (state) => {
            state.error = 'ERROR'
            state.loading = false
        })
    },
})
