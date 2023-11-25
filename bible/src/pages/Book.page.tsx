import { useParams } from "react-router-dom"
import Chapters from "../features/Chapters.feature"
import { useState } from "react"

const Book = () => {

    const { book } = useParams()
    const [bookName, setBookName] = useState('')

    return (
        <section>
            <h1 className="text-center">{ bookName }</h1>
            <div className="flex flex-wrap">
                <Chapters book={ book } setBookName={ setBookName } />
            </div>
        </section>
    )
}

export default Book