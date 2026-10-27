import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// App puts the five sections together in page order.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Slider />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
