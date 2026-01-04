import { Navbar, Footer, WhatsAppButton } from './components/layout'
import {
  Hero,
  About,
  Services,
  Process,
  Testimonials,
  Contact,
} from './components/sections'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
