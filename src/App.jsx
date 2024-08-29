import { Outlet } from 'react-router-dom';

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/hero.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
