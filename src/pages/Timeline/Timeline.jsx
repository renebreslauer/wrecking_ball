import React from 'react'
import styles from '../Timeline/Timeline.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import SkillsComponent from '../../components/SkillsComponent/SkillsComponent'
import { Parallax } from 'react-scroll-parallax'

function Timeline() {
  return (
    <>
      <ScrollableAnchor id={'Timeline'}>
        <div className={styles.timeline_container}>
          <Parallax className={styles.timeline_header} x={[-50, 0]} y={[0, 20]}>
            <h1>What Can I Do?</h1>
          </Parallax>
          <SkillsComponent />
        </div>
      </ScrollableAnchor>
    </>
  )
}
export default Timeline
