import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getBible from "../services/bible"

export const fetchBibleContent = createAsyncThunk(
    'get/bibleContent',
    async () => {
        const response = getBible()
        return response
    }
)

const initialState = {
    error: '',
    loading: false,
    books: [],
    currentBook: null,
    currentChapter: null,
}

export const contentSlice = createSlice({
    name: 'bibleContent',
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
