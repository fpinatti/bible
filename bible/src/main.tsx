import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './lang'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <ChakraProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>,
)
