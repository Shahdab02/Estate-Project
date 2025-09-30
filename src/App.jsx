import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Testimonails from './Components/Testimonails/Testimonails'
import Contact from './Components/Contact/Contact'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden' >
    <ToastContainer />
    <Header />
    <About />
    <Projects />
    <Testimonails/>
    <Contact />
    <Footer />
    </div>
  )
}

export default App