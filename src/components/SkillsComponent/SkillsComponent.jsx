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
                <h3>WEB DEVELOPMENT</h3>
                <p>
                  I can take a website from idea to fruition, from mockup to
                  code.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.row}>
          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_text}>
              <div className={styles.col_1_of_2_text_wrapper}>
                <h3>DESIGN AND CREATIVE</h3>
                <p>
                  I can take a website from idea to fruition, from mockup to
                  code.
                </p>
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
