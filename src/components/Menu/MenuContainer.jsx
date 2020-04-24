import React from 'react'
import MenuButton from './MenuButton'
import Menu from './Menu'
import styles from './Menu.module.scss'

class MenuContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      visible: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e) {
    this.toggleMenu()

    console.log('clicked')
    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        <div>
          <div>
            <p>menu</p>
            <ul>
              <li>
                <a href="#Intro">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a hre="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default MenuContainer
