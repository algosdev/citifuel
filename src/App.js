import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Map from './components/map/Map'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import ContactForm from './components/contact/ContactForm'
import WhyUs from './components/whyus/WhyUs'
import Navigation from './components/navigation/Navigation'
import { useState } from 'react'

function App() {
  const [sectionValue, setSectionValue] = useState('01')
  return (
    <>
      <Header />
      <Banner setSectionValue={setSectionValue} />
      <About setSectionValue={setSectionValue} />
      <Map setSectionValue={setSectionValue} />
      <Reviews setSectionValue={setSectionValue} />
      <WhyUs setSectionValue={setSectionValue} />
      <ContactForm setSectionValue={setSectionValue} />
      <Footer />
      <Navigation sectionValue={sectionValue} />
    </>
  )
}

export default App
