
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Domains from './components/Domains';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <Ecosystem />
      <Domains />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;