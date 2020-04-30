import React from 'react'
import '../../App.scss'
import Logo from '../../assets/logo.svg'

class MenuButton extends React.Component {
  render() {
    return (
      <button id="MenuButton" onMouseDown={this.props.handleMouseDown}>
        <img src={Logo} className="logo_svg" />
      </button>
    )
  }
}

export default MenuButton
