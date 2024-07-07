import './Landing.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/Land2/About';
import Properties from './Components/Properties/Properties';
import Reviews from './Components/Reviews/Reviews';
import Slider from './Components/Slideshow/Slider';
import Testimonial from './Components/Testimonials/Testimonial';

function Landing() {
  return (
      <div className='landing'>
        <div className="section2">
          <Home />
        </div>
        <div className="section" style={{marginBottom: '150px'}}>
          <About />
        </div>
        <div className="section">
          <Properties />
        </div>
        <div className="section" style={{marginBottom: '150px', marginTop: '100px'}}>
          <Testimonial />
        </div>
        <div className="section" style={{marginBottom: '150px'}}>
          <Blogs />
        </div>
        <div className="section" style={{marginBottom: '150px'}}>
          <Details />
        </div>
        <div className="section" style={{
          overflowX: 'hidden',
          marginBottom: '100px',
        }}>
          <Slider />
        </div>
        <div className="section1">
          <Reviews />
        </div>
        <div className="section1">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  );
}

export default Landing;
