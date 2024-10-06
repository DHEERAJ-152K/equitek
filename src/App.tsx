import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Explore from './components/Explore'
import Products from './components/Products'

function App() {

  return (
    <div className=' bg-vector1 bg-cover bg-center pt-5 '>
      <Navbar />
      <Home />
      <Card />
      {/* <Products /> */}
      <Experience />
      <Explore />
      <Footer />
    </div>
  )
}

export default App
