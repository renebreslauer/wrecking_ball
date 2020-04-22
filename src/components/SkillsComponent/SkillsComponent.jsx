import React from 'react'
import ReactGif from '../assets/react.gif'
import React_Static from '../assets/react_static.png'
import styles from './SkillsComponent.module.scss'

class SkillsComponent extends React.Component {
  render() {
    return (
      <div className={styles.skills_grid}>
        <div class={styles.row}>
          <div class={styles.col_1_of_4}>
            <div class={styles.col_1_of_4_overlay}></div>
            <p>REACT</p>
            <img src={ReactGif} className={styles.col_1_of_4_active} />
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
}
export default SkillsComponent
