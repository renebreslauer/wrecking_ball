import React from 'react'
import Intro from '../src/pages/Intro/Intro'
import About from '../src/pages/About/About'
import Timeline from '../src/pages/Timeline/Timeline'
import Contact from '../src/pages/Contact/Contact'
import MenuContainer from './components/Menu/MenuContainer'
import MenuButton from './components/Menu/MenuButton'
import Logo from './components/assets/logo.svg'
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
      function() {
        this.setState({ isLoading: false })
      }.bind(this),
      3000
    )
  }

  render() {
    let { isLoading } = this.state

    return (
      <div>
        {isLoading ? (
          <div className="loading">
            <img src={Logo} className="loading_logo" />
          </div>
        ) : (
          <div className="App">
            <MenuContainer />
            <Intro />
            <About />
            <Timeline />
            <Contact />
          </div>
        )}
      </div>
    )
  }
}

export default App
