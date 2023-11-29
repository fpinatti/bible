import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Verses from "../features/Verses.feature"
import { useTranslation } from "react-i18next"
import Button from "../components/Button.component"

const Chapter = () => {

    const { book, chapter } = useParams()
    const [bookName, setBookName] = useState('')
    const [chapterNumber, setChapterNumber] = useState(0)
    const { t } = useTranslation()

    const navigate = useNavigate()
    
    const onClickBack = () => {
        console.log('a0a')
        navigate(-1)
    }

    return (
        <section className="text-center">
            <div className="flex justify-center items-center gap-3">
                <Button onClick={onClickBack}>
                    { t('back') }
                </Button>
                <h1>{ bookName }</h1>
            </div>
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