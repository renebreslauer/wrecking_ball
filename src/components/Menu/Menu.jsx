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
        <div className="menu_container">
          <h2>
            <a href="">HOME</a>
          </h2>
          <h2>
            <a href="#About">ABOUT</a>
          </h2>
          <h2>
            <a href="#Timeline">SKILLS</a>
          </h2>
          <h2>
            <a href="#Contact">CONTACT</a>
          </h2>
        </div>
      </div>
    )
  }
}

export default Menu
