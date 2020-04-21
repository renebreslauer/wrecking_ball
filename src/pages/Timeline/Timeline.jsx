import React from 'react'
import styles from '../Timeline/Timeline.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function Timeline() {
    return (
        <ScrollableAnchor id={'Timeline'}>
        <div className={styles.timeline_container}>
            <h1>Timeline</h1>
        </div>
        </ScrollableAnchor>
    )
}
export default Timeline