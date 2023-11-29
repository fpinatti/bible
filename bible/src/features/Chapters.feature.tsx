import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchBibleContent } from '../store/bible.slice'
import ChapterButton from "../components/ChapterButton.component"
import { selectBibleBooks } from "../store/bible.selector"
import Button from "../components/Button.component"

const Chapters = ({ book, setBookName }) => {

    // const { books } = useSelector(selectBibleBooks)
    const books = useSelector(selectBibleBooks)
    const dispatch = useDispatch()
    const [chapters, setChapters] = useState([])
    // const [fullBookName, setFullBookName] = useState('')

    useEffect(() => {
        dispatch(fetchBibleContent())
    }, [])

    useEffect(() => {
        const filteredChapters = books.filter((element) => element.abbrev === book)
        if (filteredChapters[0]) {
            setBookName(filteredChapters[0].name)
            setChapters(filteredChapters[0].chapters)
        }
    }, [books])
    
    return (
        <>
            { chapters.map((element, index) => {
                return <ChapterButton key={book + index} book={book} id={index + 1}>
                    { index + 1 }
                </ChapterButton>
            })}
        </>
    )
}

export default Chapters