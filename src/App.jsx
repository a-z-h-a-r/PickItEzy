import { useState } from 'react'
import Navbar from './components/Navbar'
import GroupSwitcher from './components/GroupSwitcher'
import Hero from './components/Hero'
import ComingSoon from './components/ComingSoon'
import Features from './components/Features'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Download from './components/Download'
import WhatsAppGroup from './components/WhatsAppGroup'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [role, setRole] = useState('users')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar role={role} theme={theme} onToggleTheme={toggleTheme} />
      <GroupSwitcher role={role} onChange={setRole} />
      <Hero role={role} />
      <ComingSoon role={role} />
      <Features role={role} />
      <Categories role={role} />
      <HowItWorks role={role} />
      <Download role={role} />
      <WhatsAppGroup role={role} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
