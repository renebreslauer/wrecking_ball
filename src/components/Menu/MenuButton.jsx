import React from 'react'
import '../../App.scss'
import Lottie from 'react-lottie'
import Initials from '../../assets/initials.svg'
import animationData from '../../lotties/pinkblob.json'
import YellowBlob from '../../lotties/yellowblob.json'

class MenuButton extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }

    return (
      <button id="MenuButton" onMouseDown={this.props.handleMouseDown}>
        <div className="animation_overlay">
          <img src={Initials} className="initials_svg" />
        </div>
        <Lottie
          className="blobanimation"
          options={defaultOptions}
          height={300}
          width={300}
        />
      </button>
    )
  }
}

export default MenuButton
