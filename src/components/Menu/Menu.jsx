import React from 'react'
import '../../App.scss'

class Menu extends React.Component {
  render() {
    let visibility = 'hide'

    if (this.props.menuVisibility) {
      visibility = 'show'
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <a href="#Intro">Home</a>
        </h2>
        <h2>
          <a href="#About">About</a>
        </h2>
        <h2>
          <a href="#Skills">Contact</a>
        </h2>
        <h2>
          <a href="#">Search</a>
        </h2>
      </div>
    )
  }
}

export default Menu
