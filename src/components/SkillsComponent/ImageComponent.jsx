import React from 'react'
import styles from './SkillsComponent.module.scss'

const ImageComponent = (props) => {
  console.log(props)
  return (
    <div className={styles.gridbox}>
      <div className={styles.gridbox_content}>
        <div className={styles.gridbox_background}>
          <div className={styles.gridbox_content_image} id={props.id}></div>
        </div>
      </div>
    </div>
  )
}

export default ImageComponent
