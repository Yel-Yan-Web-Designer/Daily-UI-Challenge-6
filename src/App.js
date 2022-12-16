import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonials/>
        <Gallery/>
        <Footer/>
    </div>
  );
}

export default App;
