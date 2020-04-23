import React from 'react'
import styles from '../About/About.module.scss'
import Portrait from '../../components/assets/portrait.svg'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function About() {
  return (
    <ScrollableAnchor id={'About'}>
      <div className={styles.about_container}>
        <div className={styles.about_text_container}>
          <Parallax className={styles.about_header} y={[-50, 10]}>
            <h1>Hi! I'm Rene.</h1>
          </Parallax>

          <Parallax classname={styles.about_content} x={[70, 30]}>
            <div className={styles.about_content_text}>
              <span className={styles.emphasis_text}>
                I am a frontend developer and visual designer who's obsessed
                with building things.
              </span>
              Especially passionate about interactive user interfaces, I'm
              always exploring new ways to combine web development,
              illustration, and animation.
              <span className={styles.emphasis_text}>
                If I don't know how to do something, I figure it out.
              </span>
              I love challenges and tackling new technologies.
            </div>
          </Parallax>
          <Parallax className={styles.portrait_container} x={[-50, -30]}>
            <img
              className={styles.portrait_image}
              src={Portrait}
              alt="portrait"
            />
          </Parallax>
        </div>
        <div className={styles.background_overflow}></div>
      </div>
    </ScrollableAnchor>
  )
}

export default About
