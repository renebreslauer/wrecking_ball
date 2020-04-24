import React from 'react'
import styles from './Menu.module.scss'
import Logo from '../assets/logo.svg'

class MenuButton extends React.Component {
  render() {
    return (
      <button id={styles.MenuButton} onMouseDown={this.props.handleMouseDown}>
        <img src={Logo} className={styles.logo_button} />
      </button>
    )
  }
}

export default MenuButton
