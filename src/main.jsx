import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
import App from './App.jsx'
import Error from './pages/error.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import ProjectPage from './pages/project-page.jsx'

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      // {
      //   path: '/resume',
      //   element: <Resume />,
      // },
      {
        path: '/project/:id',
        element: <ProjectPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
