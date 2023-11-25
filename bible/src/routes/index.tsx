import Chapter from '../pages/Chapter.page'
import Book from '../pages/Book.page'
import Home from '../pages/Home.page'
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