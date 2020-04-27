import React from 'react'
import styles from '../Skills/Skills.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import SkillsGrid from '../../components/SkillsComponent/SkillsGrid'
import { Parallax } from 'react-scroll-parallax'

const Timeline = () => {
  return (
    <>
      <ScrollableAnchor id={'Skills'}>
        <div className={styles.timeline_container}>
          <Parallax className={styles.timeline_header} y={[20, 120]}>
            <h1>What I Do</h1>
          </Parallax>
          <SkillsGrid />
        </div>
      </ScrollableAnchor>
    </>
  )
}
export default Timeline
