import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchBibleContent } from '../store/bible.slice'
import Verse from "../components/Verse.component"
import { selectBibleBooks } from "../store/bible.selector"
import { BookElement } from './Books.feature'

type VersesProp = {
    book: string;
    chapter: number;
    setBookName: (book: string) => void;
    setChapterNumber: (chapter: number) => void;
}


const Verses = ({ book, chapter, setBookName, setChapterNumber }: VersesProp) => {

    const books = useSelector(selectBibleBooks)
    const dispatch = useDispatch()
    const [verses, setVerses] = useState([])

    useEffect(() => {
        dispatch(fetchBibleContent())
    }, [])

    useEffect(() => {
        const filteredChapter = books.filter((element: BookElement) => element.abbrev === book)
        if (filteredChapter[0]) {
            const rawVerses = filteredChapter[0].chapters[chapter - 1]
            setVerses(rawVerses)
            setBookName(filteredChapter[0].name)
            setChapterNumber(chapter)
        }
    }, [books])
    
    return (
        <div className="flex-wrap inline-flex">
            { verses.map((element, index) => {
                return <Verse key={index} verse={element} id={index}>
                    { index + 1 }
                </Verse>
            })}
        </div>
    )
}

export default Verses