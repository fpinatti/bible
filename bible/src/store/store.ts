import { configureStore } from "@reduxjs/toolkit"
import { contentSlice } from "./content.slice"
export const store = configureStore({
    reducer: {
        bibleContent: contentSlice.reducer,
    },
})