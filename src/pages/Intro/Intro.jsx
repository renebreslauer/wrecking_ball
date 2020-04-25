import React from 'react'
import styles from './Intro.module.scss'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Intro() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <>
      <div className={styles.intro_container}>
        <div className={styles.alt_intro}></div>
        <div className={styles.intro_svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1352.33 475.32">
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_16}
              d="M90.49,58.71l-14.33,63H40.83L9,10.55H46.66L61,78.54l16.83-68h25.33l16.83,68,14.17-68H172L140.15,121.7H104.82z"
              transform="translate(-7.67 -9.55)"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_15}
              d="M252.47,79.2H212.64v42.5H179V10.55h33.66V49.87h39.83V10.55h33.66V121.7H252.47z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_14}
              d="M333.79,77.54l-41.66-67H330L350.62,48,371,10.55h37.83l-41.32,67V121.7H333.79z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.subtitle_svg}
              d="M4.34,5.99h34.11v112.63H4.34V5.99z M99.75,5.99h68.39c23.3,0,33.44,15.54,33.44,28.71
		c0,14.02-8.27,23.47-19.25,25.84c12.16,1.86,21.45,13,21.45,27.53c0,15.7-10.64,30.56-33.27,30.56H99.75V5.99z M160.2,47.87
		c3.55,0,6.75-3.21,6.75-7.26c0-3.88-3.21-6.92-6.75-6.92h-26.34v14.18H160.2z M161.22,90.93c4.9,0,7.94-3.38,7.94-7.6
		c0-4.05-3.04-7.77-7.94-7.77h-27.36v15.37H161.22z M217.45,5.99h85.45v28.37h-51.33v13.17h50.15V75.9h-50.15v14.35h51.33v28.37
		h-85.45V5.99z M318.1,5.99h34.11V88.9h42.72v29.72H318.1V5.99z M460.8,4.13c34.79,0,61.64,23.64,61.64,58.26
		s-26.85,58.26-61.64,58.26s-61.64-23.64-61.64-58.26S426.01,4.13,460.8,4.13z M460.8,34.19c-16.38,0-27.02,12.5-27.02,28.2
		s10.64,28.2,27.02,28.2s27.02-12.5,27.02-28.2S477.18,34.19,460.8,34.19z M568.71,58.17v60.45H534.6V5.99h35.12l39.18,56.74V5.99
		h34.11v112.63h-32.76L568.71,58.17z M717.15,4.13c26.17,0,41.71,13.17,49.48,27.69l-28.71,14.69
		c-3.72-6.92-11.14-12.33-20.77-12.33c-16.38,0-27.36,12.5-27.36,28.2s10.98,28.2,27.36,28.2c7.26,0,14.02-1.86,18.41-5.07v-4.9
		h-21.78V52.6h54.88v45.26c-12.5,13.85-29.38,22.8-51.5,22.8c-34.11,0-61.97-22.29-61.97-58.26
		C655.17,26.25,683.04,4.13,717.15,4.13z M899.36,104.1h-43.23l-4.39,14.52h-36.98L856.3,5.99h42.89l41.54,112.63h-36.98
		L899.36,104.1z M864.91,75.73h25.67l-12.83-39.68L864.91,75.73z M960.83,35.71H930.6V5.99h94.4v29.72h-30.06v82.91h-34.11V35.71z"
              transform="translate(-7.67 170)"
            />

            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_13}
              d="M90.49,418.88l-14.33,63H40.83L9,370.72H46.66l14.33,68,16.83-68h25.33l16.83,68,14.17-68H172L140.15,481.87H104.82Z"
              transform="translate(-7.67 -9.55)"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_12}
              d="M224.81,446.21H212.64v35.66H179V370.72H238.3c26,0,40,17.33,40,38.16,0,19.16-11.17,29.33-20,33.66l20.16,39.33H240.14Zm8.33-47.5h-20.5v19.5h20.5c5.66,0,11-3.66,11-9.83C244.14,402.38,238.8,398.71,233.14,398.71Z"
              transform="translate(-7.67 -9.55)"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_11}
              d="M292,370.72h84.32v28H325.63v13h49.49v28H325.63v14.16h50.66v28H292Z"
              transform="translate(-7.67 -9.55)"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_10}
              d="M385.29,426.38c0-34.33,26.33-57.49,60.32-57.49,30,0,44.66,17,51.33,32.32l-29,13.5a23.8,23.8,0,0,0-22.33-16.16c-15.33,0-26.16,12.33-26.16,27.83s10.83,27.83,26.16,27.83A23.8,23.8,0,0,0,467.94,438l29,13.33c-6.5,14.83-21.33,32.5-51.33,32.5C411.62,483.87,385.29,460.54,385.29,426.38Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_9}
              d="M547.27,442.71,541.1,451v30.83H507.44V370.72H541.1v41.66l29.16-41.66h41.16l-42,51.66,43.83,59.49h-41Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_8}
              d="M619.26,370.72h33.66V481.87H619.26Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_7}
              d="M704.58,422.21v59.66H670.92V370.72h34.66l38.66,56v-56H777.9V481.87H745.57Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_6}
              d="M851.06,368.89c25.83,0,41.16,13,48.83,27.33l-28.33,14.49a23,23,0,0,0-20.5-12.16c-16.16,0-27,12.33-27,27.83s10.83,27.83,27,27.83c7.17,0,13.83-1.84,18.17-5v-4.84h-21.5V416.71h54.16v44.66c-12.33,13.67-29,22.5-50.83,22.5-33.66,0-61.15-22-61.15-57.49C789.91,390.72,817.4,368.89,851.06,368.89Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_5}
              d="M959.38,370.72h67.49c23,0,33,15.33,33,28.33,0,13.83-8.17,23.16-19,25.49,12,1.84,21.17,12.83,21.17,27.17,0,15.49-10.5,30.16-32.83,30.16H959.38ZM1019,412.05a7,7,0,0,0,6.67-7.17,6.83,6.83,0,0,0-6.67-6.83h-26v14Zm1,42.49c4.83,0,7.83-3.33,7.83-7.5a7.58,7.58,0,0,0-7.83-7.67h-27v15.17Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_4}
              d="M1147,467.54h-42.66L1100,481.87h-36.49l41-111.15h42.33l41,111.15h-36.49Zm-34-28h25.33l-12.66-39.16Z"
              transform="translate(-7.67 -9.55)"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_3}
              d="M1193.86,370.72h33.66v81.82h42.16v29.33h-75.82Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
            <path
              className={styles.intro_svg_letter}
              id={styles.intro_svg_letter_2}
              d="M1283.18,370.72h33.66v81.82H1359v29.33h-75.82Z"
              transform="translate(-7.67 -9.55)"
              stroke-linecap="square"
            />
          </svg>
        </div>
        <div className={styles.subtitle_cover}></div>
        <div
          className="intro-spring_container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className={styles.circle}
            style={{ transform: props.xy.interpolate(trans4) }}
          ></animated.div>
        </div>
        <div className={styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Intro
