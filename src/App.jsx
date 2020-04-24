import React from 'react'
import Intro from '../src/pages/Intro/Intro'
import About from '../src/pages/About/About'
import Timeline from '../src/pages/Timeline/Timeline'
import Contact from '../src/pages/Contact/Contact'
import MenuContainer from './components/Menu/MenuContainer'
import Logo from '../src/components/assets/logo.svg'
import './App.scss'

function App() {
  return (
    <>
      <MenuContainer />
      <Intro />
      <About />
      <Timeline />
      <Contact />
    </>
  )
}

export default App
