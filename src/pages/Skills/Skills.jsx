import React from 'react'
import styles from '../Skills/Skills.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function Skills() {
  return (
    <ScrollableAnchor id={'Skills'}>
      <div className={styles.skills_container}>
        <p>hello</p>
      </div>
    </ScrollableAnchor>
  )
}
export default Skills
