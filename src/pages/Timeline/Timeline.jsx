import React from 'react'
import styles from '../Timeline/Timeline.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

class Timeline extends React.Component {
	
	render() {
    return (
         <>
               <ScrollableAnchor id={'Timeline'}>

        <div className={styles.timeline_container}>
            <Parallax className={styles.timeline_header} x={[100, 0]} y={[-130,0]}>
            <h1>Experience</h1>
            </Parallax>
 <div className={styles.timeline_content}>
            Timeline
        </div>
        </div>
       
</ScrollableAnchor>
        </>
    )
}
}
export default Timeline