import React from 'react'
import '../../App.scss'

class MenuButton extends React.Component {
  render() {
    return (
      <button id="MenuButton" onMouseDown={this.props.handleMouseDown}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 259.32 267.2"
        >
          <path
            class="logo_background"
            d="M12.73,134C12.69,70.2,64.31,17.74,129.1,17.62c65.01-0.11,117.12,52.2,117.11,116.76
	c-0.01,64.19-51.56,116.75-116.73,116.84C64.05,251.31,12.27,198.11,12.73,134z"
          />
          <path
            class="st1"
            d="M204.32,157.5c-2.75,9.76-7.44,18.59-13.77,26.5c-9.2,11.48-20.69,19.93-34.59,24.78
	c-20.4,7.12-40.51,6.24-60.02-3.24c-20.35-9.88-33.6-26-40.73-47.32c-0.73-2.19-1.48-4.41-1.44-6.78c-0.34-0.56-0.32-0.99,0.42-1.16
	c0.77,0.31,1.1,1,1.41,1.68c3.43,7.49,9.52,12.06,16.88,15.11c12.97,5.39,26.1,4.9,39.34,0.97c11.9-3.53,22-10.17,31.41-17.99
	c9.86-8.21,18.29-17.69,24.54-28.98c4.16-7.52,7.32-15.45,7.58-24.08c0.29-9.77-3.8-17.58-12.32-22.77
	c-4.3-2.61-8.92-4.49-13.85-5.53c-2.94-0.62-5.81-1.45-8.61-2.52c-1.8-0.46-3.38-1.36-4.88-2.44c-0.98-0.7-1.69-1.59-2.13-2.71
	c-0.31-0.79-0.64-1.73,0.08-2.33c0.92-0.77,1.43,0.36,2.01,0.81c0.8,0.61,1.57,1.23,2.42,1.76c0.01,0.01,0.02,0.01,0.03,0.02
	c0.88,0.44,1.73,0.93,2.65,1.27c3.24,1.2,4.61,1.85,6.5-1.49c0.52-0.9,1.48-1.29,2.56-1.24c0.08,0.02,0.15,0.04,0.23,0.06
	c8.25,2,15.89,5.4,22.98,10.05c2.33,1.52,2.55,1.44,3.15-1.28c1.5-6.73-1.71-12.16-8.55-14.55c-1.65-0.58-3.45-0.62-5.02-1.46
	c-0.01-0.02-0.02-0.04-0.03-0.06c-1.1-2.04,0.79-1.8,1.67-1.8c3.53,0.02,6.96,0.66,10.05,2.49c7.76,4.58,12.32,14.83,10.28,23.62
	c-0.07,0.32-0.13,0.62-0.17,0.91c0,0.01,0,0.01,0,0.01c-0.23,1.69,0.19,2.89,1.59,3.81c0.2,0.13,0.41,0.25,0.65,0.37
	c1.19,0.59,1.79,1.66,2.09,2.92c5.89,6.56,10.3,14.02,13.45,22.24C208.5,123.69,209.12,140.5,204.32,157.5z"
          />
          <path
            class="st2"
            d="M140.71,65.46c4.65,2.03,9.77,2.4,14.49,4.18c7.82,2.95,14.69,7.06,18.41,15.01c3.54,7.58,2.95,15.3,0.65,23.04
	c-3.1,10.44-8.61,19.6-15.5,27.9c-9.71,11.7-21.23,21.32-34.73,28.33c-8.29,4.31-17.19,6.84-26.63,7.57
	c-11.91,0.92-22.92-1.28-32.91-7.97c-4.85-3.24-8.28-7.59-10.22-13.1c-0.98-0.33-0.41-1.51-1.09-2.01
	c-0.88-4.62-1.23-9.28-1.26-13.98c-0.02-15.85,8.04-28.11,17.71-39.63c1.12-1.33,2.12-2.8,3.48-3.92c0.82-0.68,1.75-1.63,2.85-0.8
	c1.04,0.77,0.33,1.86-0.07,2.73c-2.33,5.03-3.73,10.33-4.61,15.78c-0.38,2.32-0.38,4.66-0.14,6.98c0.52,5.07,3.93,7.1,8.64,5.24
	c4.48-1.77,8.17-4.8,12-7.59c6.93-5.06,13.65-10.42,21.37-14.29c8.11-4.07,16.91-6.06,25.56-8.5c3.21-0.91,6.42-1.81,9.33-3.51
	c3.96-2.32,4.48-5.34,1.47-8.83c-2.6-3.02-6.12-4.57-9.78-5.77c-6.56-2.15-13.34-2.81-20.21-2.65c-1.66,0.04-3.33,0.11-5-0.07
	c-0.64-0.23-1.5-0.26-1.23-1.33c0.65-0.86,1.63-1.07,2.59-1.34c6.5-1.78,13.12-2.46,19.85-2.36
	C137.46,64.6,138.9,66.03,140.71,65.46z"
          />
          <path
            class="st3"
            d="M140.71,65.46c-0.39,0.62-1.01,0.49-1.56,0.41c-8.83-1.24-17.39,0.16-25.85,2.6c-0.13,0.2-0.48,0.42-0.47,0.48
	c0.05,0.38,0.39,0.13,0.59,0.17c0.46,0.09,0.96,0.16,1.38-0.17c7.82-0.18,15.63-0.18,23.23,2.03c4.9,1.43,9.65,3.17,12.79,7.59
	c2.45,3.45,1.79,6.63-1.91,8.78c-2.89,1.68-6.05,2.7-9.26,3.61c-9.19,2.58-18.57,4.61-27.11,9.09c-7.54,3.95-14.16,9.28-21,14.28
	c-3.55,2.59-7.01,5.34-11.11,7.07c-5.92,2.5-9.96-0.15-10.18-6.67c-0.26-7.73,1.75-14.95,4.79-21.95c0.34-0.78,1.14-1.47,0.69-2.6
	c-1.41,0.14-2.14,1.24-2.94,2.1c-5.97,6.41-11.09,13.45-15.01,21.29c-3.06,6.12-5.3,12.52-5.53,19.47
	c-0.02,0.47-0.23,0.94-0.36,1.41c-0.38-14.01,3.28-26.97,10.43-38.94c8.76-14.66,21.06-25.35,36.8-31.99
	c10.39-4.38,21.25-6.54,32.55-6.07c1.78,0.07,2.87-0.35,3.87-1.91c5.48-8.58,13.5-13.28,23.53-13.9c8.79-0.54,16.56,2.81,23.51,8.09
	c0.24,0.19,0.36,0.54,0.53,0.82c-1.17,0.53-2.09-0.25-3.03-0.66c-9.58-4.21-19.16-4.16-28.72,0.04c-4.87,2.14-8.44,5.79-11.53,9.99
	c-0.59,0.8-1.07,1.71-2.12,2.01c-1.56-0.67-2.73-1.8-3.8-3.07C134.15,63.13,137.59,64.13,140.71,65.46z"
          />
          <path
            class="st2"
            d="M190.04,81.18c-0.47,1.23-0.87,2.48-1.31,3.73c-0.3-1.26-0.9-2.33-2.09-2.92c-0.24-0.12-0.45-0.24-0.65-0.37
	c-1.4-0.92-1.82-2.12-1.59-3.81c0,0,0,0,0-0.01c0.04-0.29,0.1-0.59,0.17-0.91c2.04-8.79-2.52-19.04-10.28-23.62
	c-3.09-1.83-6.52-2.47-10.05-2.49c-0.88,0-2.77-0.24-1.67,1.8c-0.39,0.47-0.99,0.52-1.56,0.53c-5.11,0.03-8.53,2.63-10.97,6.77
	c-0.08-0.02-0.15-0.04-0.23-0.06c-1.08-0.05-2.04,0.34-2.56,1.24c-1.89,3.34-3.26,2.69-6.5,1.49c-0.92-0.34-1.77-0.83-2.65-1.27
	c6.6-11.18,18.85-16.42,31.36-14.97c4.9,0.56,9.35,2.07,13.68,4.23C191.29,56.34,194.25,70.19,190.04,81.18z"
          />
          <path
            class="st2"
            d="M149.81,59.82c0.08,0.02,0.15,0.04,0.23,0.06c-0.11,0.18-0.21,0.36-0.31,0.54c-1.47-0.18-2.05,0.94-2.55,1.93
	c-1.07,2.15-2.61,2.41-4.71,1.63c-1.62-0.61-3.23-1.21-4.74-2.07c0.12-0.21,0.24-0.42,0.37-0.63c0.88,0.44,1.73,0.93,2.65,1.27
	c3.24,1.2,4.61,1.85,6.5-1.49C147.77,60.16,148.73,59.77,149.81,59.82z"
          />
          <path
            class="st2"
            d="M184.57,76.89c-0.07,0.32-0.13,0.62-0.17,0.91c-0.15-0.96-0.19-2.05-0.16-3.39
	c0.18-8.65-2.71-15.79-10.33-20.48c-3.2-1.97-6.83-2.4-10.51-2.47c-0.68-0.02-0.92,0.23-0.66,0.88c-0.05,0.09-0.11,0.17-0.17,0.24
	c-1.1-2.04,0.79-1.8,1.67-1.8c3.53,0.02,6.96,0.66,10.05,2.49C182.05,57.85,186.61,68.1,184.57,76.89z"
          />
          <path
            class="st2"
            d="M188.73,84.91c-0.26-0.32-0.51-0.65-0.79-0.95c-0.8-0.87-1.44-1.62-1.95-2.34c0.2,0.13,0.41,0.25,0.65,0.37
	C187.83,82.58,188.43,83.65,188.73,84.91z"
          />
          <path
            class="st4"
            d="M53.16,148.42c0.81,0.43,0.67,1.37,1.09,2.01c-0.16,0.34-0.32,0.68-0.49,1.02
	C53.11,150.53,53.35,149.43,53.16,148.42z"
          />
          <path
            class="st5"
            d="M114.79,68.95c-0.92,0.79-1.99,0.41-3.08,0.46c0.31-0.8,1.09-0.62,1.58-0.94
	C113.67,69.02,114.26,68.91,114.79,68.95z"
          />
        </svg>

        {/* <img src={Logo} className="logo_button" /> */}
      </button>
    )
  }
}

export default MenuButton
