import { lazy } from 'react'
const Chapter = lazy(() => import('../pages/Chapter.page'))
const Book = lazy(() => import('../pages/Book.page'))
const  Home = lazy(() => import('../pages/Home.page'))
import App from '../pages/App.page'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/:book',
                element: <Book />
            },
            {
                path: '/:book/:chapter',
                element: <Chapter />
            },
        ],
    }
]

export default routes