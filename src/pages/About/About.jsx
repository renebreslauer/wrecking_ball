import React from 'react'
import styles from '../About/About.module.scss'
import Portrait from '../../components/assets/portrait.svg'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function About() {
    return (
    <ScrollableAnchor id={'About'}>
    <div className={styles.about_container} >
        <Parallax className={styles.about_header} x={[-50, 0]}
        >
            <h1>Hi! I'm Rene.</h1>
          </Parallax>   
        
        <div className={styles.about_text_container}>
        
        <Parallax classname={styles.about_content} x={[70, 40]} y={[0,10]}>
            <div className={styles.about_content_text}><span className={styles.emphasis_text}>I am a frontend developer and visual designer who's obsessed with building things.</span>Especially passionate about interactive user interfaces, I'm always exploring ways to combine web development, illustration, and animation.</div>
        </Parallax>
        <Parallax className={styles.portrait_container} x={[-70,-40]} y={[0,10]}>
            <img className={styles.portrait_image} src={ Portrait } alt="portrait" />
        </Parallax>
   
    
 </div>
     </div>
    </ScrollableAnchor>
    )
}

export default About