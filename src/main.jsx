import ReactDOM from 'react-dom/client';

import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './assets/css/index.css'

// Import pages
import Error from './pages/error.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import Resume from './pages/resume.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
