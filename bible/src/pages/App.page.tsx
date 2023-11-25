import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"

const App = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage('en')
    }, [])


    return (
        <>
            <Outlet />
        </>
    )
}

export default App