import React from 'react'
import ReactGif from '../assets/react.gif'
import React_Static from '../assets/react_static.png'
import styles from './SkillsComponent.module.scss'

function SkillsComponent() {
  return (
    <>
      <div className={styles.skills_grid}>
        <div className={styles.row}>
          <div className={styles.col_1_of_2} id={styles.webdev}>
            <div
              className={styles.col_1_of_2_static}
              id={styles.react_static}
            ></div>
          </div>
          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_text}>
              <div className={styles.col_1_of_2_text_wrapper}>
                <h2>WEB DEVELOPMENT</h2>
                <h3>FROM IDEA TO MOCKUP TO CODE</h3>
                <p>
                  I design creative, fully functional apps using predominantly
                  React and pure CSS/SASS. I care about every detail of the user
                  experience, from accessibility and responsiveness to the
                  unexpected animations. I am equally comitted to writing clean,
                  reusable code, and designing optimized graphics for an overall
                  seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.row}>
          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_text}>
              <div className={styles.col_1_of_2_text_wrapper}>
                <h2>DESIGN AND CREATIVE</h2>
                <h3>WEB ASSETS, ICONS, AND ANIMATIONS</h3>
                <p> </p>
              </div>
            </div>
          </div>

          <div class={styles.col_1_of_2} id={styles.design}>
            <div
              className={styles.col_1_of_2_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_2_active}
              id={styles.react_active}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsComponent
