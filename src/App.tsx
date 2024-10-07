import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card from './components/Card';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Products from './components/Products';

function App() {
  return (
    <div className='w-screen'>
      {/* First Background Image*/}
      <div className='bg-hero-pattern bg-no-repeat bg-[length:1440px_700px]'>
        <Navbar />
        <Home />
        <Card />
      </div>

      {/* Second Background Image */}
      <div className='bg-footer-pattern bg-cover bg-no-repeat'>
        <Products />
        <Experience />
        <Explore />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
