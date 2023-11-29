import { createSelector } from "@reduxjs/toolkit"

export const selectBibleBooks = (state) => {
    return state.bible.books
}

const stateBooks = state => state.bible.books

export const selectOldTestBooks = createSelector([stateBooks], (books) => {
    const testSplit = books.findIndex(element => { return element.abbrev === 'mt'})
    return books.slice(0, testSplit)
})

export const selectNewTestBooks = createSelector([stateBooks], (books) => {
    const testSplit = books.findIndex(element => { return element.abbrev === 'mt'})
    return books.slice(testSplit)
})
