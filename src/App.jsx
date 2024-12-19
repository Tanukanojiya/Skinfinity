import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx';
import Products from './components/Products';
import Faq from './components/Faq.jsx';
import VideoSection from './components/VideoSection.jsx';
import Footer from './components/Footer.jsx';
import Testimonials from './components/Testimonials.jsx';

const App = ()=> {

  return (
    <div>
        <Header/>
        <Hero/>
        <Benefits/>
        <Products/>
        <VideoSection/>
        <Testimonials/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default App
