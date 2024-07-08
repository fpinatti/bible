import { Select } from "@chakra-ui/react"
import Books from "../features/Books.feature"
import { useTranslation } from 'react-i18next'
import { useDispatch } from "react-redux"
import { bibleSlice } from '../store/bible.slice'

const Home = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const changeTranslation = (evt) => {
        dispatch(bibleSlice.actions.setCurrentTranslation(evt.target.value))
        console.log(evt.target.value, bibleSlice)
    }

    return (
        <section className="text-center">
            <h1 className="text-4xl font-bold mb-3">
                { t('bible') }
            </h1>
            <form>
                <Select placeholder="Tradução" onChange={changeTranslation}>
                    <option value={'nvi'}>NVI</option>
                    <option value={'acf'}>ACF</option>
                    <option value={'aa'}>AA</option>
                </Select>
            </form>
            <Books />
        </section>
    )
}

export default Home