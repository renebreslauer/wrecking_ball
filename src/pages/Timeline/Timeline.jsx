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
          <Parallax className={styles.timeline_header} y={[50, 90]}>
            <h1>What I'm Into</h1>
          </Parallax>
          <SkillsComponent />
        </div>
      </ScrollableAnchor>
    </>
  )
}
export default Timeline
