import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getBible from "../services/bible"

export const fetchBibleContent = createAsyncThunk(
    'get/bibleContent',
    async (param, thunkApi) => {
        const books = thunkApi.getState().bible?.books
        if (books.length) return books
        const response = await getBible(param)
        return response
    },
)

export enum translations {
    Nvi = 'nvi',
    Acf = 'acf',
    AA = 'aa'
}

const initialState = {
    error: '',
    loading: false,
    books: [],
    currentBook: null,
    currentChapter: null,
    translation: translations.Nvi,
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
        },
        setCurrentTranslation: (state, { payload }) => {
            state.translation = payload
        },
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
