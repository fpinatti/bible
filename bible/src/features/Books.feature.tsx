import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBibleContent } from '../store/bible.slice'
import BookButton from '../components/BookButton.component'
import { useTranslation } from 'react-i18next'
import { selectNewTestBooks, selectOldTestBooks } from '../store/bible.selector'
import Preloader from '../components/Preloader.component'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export type BookElement = {
    abbrev: string;
    name: string;
}

const Books = () => {
    
    const { t } = useTranslation()
    const oldTestBooks = useSelector(selectOldTestBooks)
    const newTestBooks = useSelector(selectNewTestBooks)
    const { loading } = useSelector(state => state.bible)
    const translation = useSelector((state) => state.bible)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(fetchBibleContent())
        console.log(translation.translation)
        dispatch(fetchBibleContent(translation.translation))
    }, [translation.translation])

    return (
        <div className='text-center'>
            {loading && <Preloader />}
            <div className={loading ? 'hidden' : 'block'}>
                <Tabs>
                    <TabList>
                        <Tab>{ t('oldTestament') }</Tab>
                        <Tab>{ t('newTestament') }</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div className='flex flex-wrap justify-center mb-8'>
                                { oldTestBooks.map((element: BookElement) => {
                                    return <BookButton
                                        key={element.abbrev}
                                        name={element.name}
                                        id={element.abbrev}
                                    />
                                }) }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-wrap justify-center'>
                                { newTestBooks.map((element: BookElement) => {
                                    return <BookButton
                                        key={element.abbrev}
                                        name={element.name}
                                        id={element.abbrev}
                                    />
                                }) }
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Books