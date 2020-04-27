import React from 'react'
import styles from './SkillsComponent.module.scss'

const TextComponent = (props) => {
  return (
    <div className={styles.gridbox}>
      <div className={styles.gridbox_content}>
        <div className={styles.gridbox_content_body}>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default TextComponent
