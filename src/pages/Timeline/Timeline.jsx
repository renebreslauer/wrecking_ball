import React from 'react'
import styles from '../Timeline/Timeline.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function Timeline() {
    return (
        <ScrollableAnchor id={'Timeline'}>
        <div className={styles.timeline_container}>
            <Parallax className={styles.timeline_header} x={[-90, 0]}>
            <h1>Experience</h1>
            </Parallax>
        </div>
        </ScrollableAnchor>
    )
}
export default Timeline