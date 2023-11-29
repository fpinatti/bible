import { useNavigate, useParams } from "react-router-dom"
import Chapters from "../features/Chapters.feature"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../components/Button.component"

const Book = () => {

    const { book } = useParams()
    const [bookName, setBookName] = useState('')
    const { t } = useTranslation()

    const navigate = useNavigate()
    
    const onClickBack = () => {
        navigate(-1)
    }

    return (
        <section>
            <div className="flex justify-center items-center gap-3">
                <Button onClick={onClickBack}>
                { t('back') }
                </Button>
                <h1 className="text-center">{ bookName }</h1>
            </div>
            <div className="flex flex-wrap">
                <Chapters book={ book } setBookName={ setBookName } />
            </div>
        </section>
    )
}

export default Book