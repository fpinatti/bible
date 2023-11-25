import Books from "../features/Books.feature"
import { useTranslation } from 'react-i18next'

const Home = () => {

    const { t } = useTranslation()

    return (
        <section className="text-center">
            <h1 className="text-4xl font-bold mb-3">
                { t('bible') }
            </h1>
            <Books />
        </section>
    )
}

export default Home