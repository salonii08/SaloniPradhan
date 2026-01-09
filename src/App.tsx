import { BrowserRouter as Router } from 'react-router-dom'
import ResponsiveNav from './components/Home/Navbar/ResponsiveNav'
import Footer from './components/Home/Footer/Footer'
import ScrollToTop from './components/Helper/ScrollToTop'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="antialiased bg-[#000435]">
        <ResponsiveNav />
        <Home />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App