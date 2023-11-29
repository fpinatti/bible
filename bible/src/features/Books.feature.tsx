import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBibleContent } from '../store/bible.slice'
import BookButton from '../components/BookButton.component'
import { useTranslation } from 'react-i18next'
import { selectNewTestBooks, selectOldTestBooks } from '../store/bible.selector'
import Preloader from '../components/Preloader.component'

const Books = () => {

    const { t } = useTranslation()
    const oldTestBooks = useSelector(selectOldTestBooks)
    const newTestBooks = useSelector(selectNewTestBooks)
    const { loading } = useSelector(state => state.bible)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBibleContent())
    }, [])

    return (
        <div className='text-center'>
            {loading && <Preloader />}
            <div className={loading ? 'hidden' : 'block'}>
                <h3>{ t('oldTestament') }</h3>
                <div className='flex flex-wrap justify-center mb-8'>
                    { oldTestBooks.map((element) => {
                        return <BookButton
                            key={element.abbrev}
                            name={element.name}
                            id={element.abbrev}
                        />
                    }) }
                </div>
                <h3>{ t('newTestament') }</h3>
                <div className='flex flex-wrap justify-center'>
                    { newTestBooks.map((element) => {
                        return <BookButton
                            key={element.abbrev}
                            name={element.name}
                            id={element.abbrev}
                        />
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Books