import React from 'react'
import ReactGif from '../assets/react.gif'
import React_Static from '../assets/react_static.png'
import styles from './SkillsComponent.module.scss'

function SkillsComponent() {
  return (
    <>
      <div className={styles.skills_grid}>
        <div className={styles.row}>
          <div className={styles.col_1_of_4}>
            <div className={styles.col_1_of_4_overlay}>React</div>
            <div
              className={styles.col_1_of_4_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_4_active}
              id={styles.react_active}
            ></div>
          </div>
          <div class={styles.col_1_of_4}>
            <div className={styles.col_1_of_4_overlay}>Javascript</div>
            <div
              className={styles.col_1_of_4_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_4_active}
              id={styles.react_active}
            ></div>
          </div>

          <div className={styles.col_1_of_4}>
            <div className={styles.col_1_of_4_overlay}>CSS/SASS</div>
            <div
              className={styles.col_1_of_4_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_4_active}
              id={styles.react_active}
            ></div>
          </div>
          <div className={styles.col_1_of_4}>
            <div className={styles.col_1_of_4_overlay}>SVG</div>
            <div
              className={styles.col_1_of_4_static}
              id={styles.react_static}
            ></div>
            <div
              className={styles.col_1_of_4_active}
              id={styles.react_active}
            ></div>
          </div>
        </div>
      </div>
      <div class={styles.row}>
        <div class={styles.col_1_of_4}>
          <div className={styles.col_1_of_4_overlay}>Illustrator</div>
          <div
            className={styles.col_1_of_4_static}
            id={styles.react_static}
          ></div>
          <div
            className={styles.col_1_of_4_active}
            id={styles.react_active}
          ></div>
        </div>

        <div class={styles.col_1_of_4}>
          <div className={styles.col_1_of_4_overlay}>Photoshop</div>
          <div
            className={styles.col_1_of_4_static}
            id={styles.react_static}
          ></div>
          <div
            className={styles.col_1_of_4_active}
            id={styles.react_active}
          ></div>
        </div>

        <div class={styles.col_1_of_4}>
          <div className={styles.col_1_of_4_overlay}>Animation</div>
          <div
            className={styles.col_1_of_4_static}
            id={styles.react_static}
          ></div>
          <div
            className={styles.col_1_of_4_active}
            id={styles.react_active}
          ></div>
        </div>

        <div class={styles.col_1_of_4}>
          <p>Col 4 of 4</p>
        </div>
      </div>
      <div class={styles.row}>
        <div class={styles.col_1_of_4}>
          <p>Col 1 of 4</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>Col 2 of 4</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>Col 3 of 4</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>Col 4 of 4</p>
        </div>
      </div>
    </>
  )
}

export default SkillsComponent
