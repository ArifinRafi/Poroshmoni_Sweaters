import { NavbarSimple } from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import Carousel from './components/Carousel'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'

function App() {
  

  return (
    <>
      <div className='max-w-screen-3xl mx-auto'>
        <Home></Home>
        <AboutUs></AboutUs>
        <Services></Services>
      </div>
    </>
  )
}

export default App
