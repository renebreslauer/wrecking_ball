import React from 'react'
import Intro from '../src/pages/Intro/Intro'
import About from '../src/pages/About/About'
import Skills from './pages/Skills/Skills'
import Contact from '../src/pages/Contact/Contact'
import MenuContainer from './components/Menu/MenuContainer'
import Logo from './assets/logo.svg'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  isLoaderManage() {
    let x = document.getElementById('loader')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ isLoading: false })
      }.bind(this),
      3000,
    )
  }

  render() {
    let { isLoading } = this.state

    return (
      <div>
        {isLoading ? (
          <div className="loading">
            <img src={Logo} className="loading_logo" alt="logo" />
          </div>
        ) : (
          <div className="App">
            <MenuContainer />
            <Intro />
            <About />
            <Skills />
            <Contact />
          </div>
        )}
      </div>
    )
  }
}

export default App
