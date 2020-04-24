import React from 'react'
import ReactGif from '../assets/react.gif'
import React_Static from '../assets/react_static.png'
import styles from './SkillsComponent.module.scss'

function SkillsComponent() {
  return (
    <>
      <div className={styles.skills_grid}>
        <div className={styles.row}>
          <div className={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_overlay}></div>
            <div
              className={styles.col_1_of_2_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_2_active}
              id={styles.react_active}
            ></div>
          </div>
          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_text}>Text goes here</div>
          </div>
        </div>

        <div class={styles.row}>
          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_text}>Text goes here</div>
          </div>

          <div class={styles.col_1_of_2}>
            <div className={styles.col_1_of_2_overlay}>Photoshop</div>
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
