import React from 'react'
import ReactGif from '../assets/react.gif'
import React_Static from '../assets/react_static.png'
import styles from './SkillsComponent.module.scss'

function SkillsComponent() {
  return (
    <div className={styles.skills_grid}>
      <div className={styles.row}>
        <div className={styles.col_1_of_4}>
          <p>React</p>
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
          <p>JAVASCRIPT</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>CSS/SASS</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>SVG</p>
        </div>
      </div>
      <div class={styles.row}>
        <div class={styles.col_1_of_4}>
          <p>ILLUSTRATOR</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>PHOTOSHOP</p>
        </div>
        <div class={styles.col_1_of_4}>
          <p>ANIMATION</p>
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
    </div>
  )
}

export default SkillsComponent
