import { about } from '../data/about'
import { dishes } from '../data/dishes'
import { footer } from '../data/footer'
import { home } from '../data/home'
import { menu } from '../data/menu'
import { navbar } from '../data/navbar'
import { review } from '../data/review'
import './App.css'
import About from './components/About'
import Dishes from './components/Dishes'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Review from './components/Review'
import Navbar from './navigation/Navbar'

function App() {

  return (
    <>
      <Navbar data={navbar} />
      <Home data={home}/>
      <Dishes data={dishes} />
      <About data={about}/>
      <Menu data={menu} />
      <Review data={review} />
      <Footer data={footer} />
    </>
  )
}

export default App
