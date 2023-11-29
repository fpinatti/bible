import { configureStore } from "@reduxjs/toolkit"
import { bibleSlice } from "./bible.slice"
export const store = configureStore({
    reducer: {
        bible: bibleSlice.reducer,
    },
})