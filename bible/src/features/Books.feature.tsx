import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBibleContent } from '../store/content.slice'
import BookButton from '../components/BookButton.component'

const Books = () => {

    const { books } = useSelector(state => state.bibleContent)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBibleContent())
    }, [])

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                { books.map((element) => {
                    return <BookButton key={element.abbrev} name={element.name} id={element.abbrev} />
                }) }
            </div>
        </>
    )
}

export default Books