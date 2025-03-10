import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './components/About/About'
import Seniority from './components/Seniority/Seniority'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<About />} />
        <Route path="/aboutme" element={<Seniority />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
