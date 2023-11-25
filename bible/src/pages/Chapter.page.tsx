import { useState } from "react"
import { useParams } from "react-router-dom"
import Verses from "../features/Verses.feature"

const Chapter = () => {

    const { book, chapter } = useParams()
    const [bookName, setBookName] = useState('')
    const [chapterNumber, setChapterNumber] = useState(0)

    return (
        <section className="text-center">
            <h1>{ bookName }</h1>
            <h2 className="text-5xl mb-14">{ chapterNumber }</h2>
            <Verses
                book={ book }
                chapter={ chapter }
                setBookName={ setBookName }
                setChapterNumber={ setChapterNumber }
            />
        </section>
    )
}

export default Chapter