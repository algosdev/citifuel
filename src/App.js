import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Map from './components/map/Map'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import ContactForm from './components/contact/ContactForm'
import WhyUs from './components/whyus/WhyUs'
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <About />
      <Map />
      <Reviews />
      <WhyUs />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
