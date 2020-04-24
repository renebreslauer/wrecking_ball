import React from 'react'
import styles from '../About/About.module.scss'
import Portrait from '../../components/assets/portrait.svg'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function About() {
  return (
    <ScrollableAnchor id={'About'}>
      <div className={styles.about_container}>
        <div className={styles.about_container_wrapper}>
          <div className={styles.about_container_body}>
            <Parallax className={styles.about_container_header} y={[-90, 10]}>
              <h1>Hi! I'm Rene.</h1>
            </Parallax>
            <Parallax classname={styles.about_content} x={[70, 40]}>
              <div className={styles.about_content_text}>
                <span className={styles.emphasis_text}>
                  I am a frontend developer and visual designer who's obsessed
                  with building things.
                </span>
                Especially passionate about interactive user interfaces, I'm
                always exploring new ways to combine web development,
                illustration, and animation to elevate the user experience.
                <span className={styles.emphasis_text}>
                  If I don't know how to do something, I figure it out.
                </span>
                I love challenges and tackling new technologies.
              </div>
            </Parallax>
            <div className={styles.portrait_container}>
              <img
                className={styles.portrait_image}
                src={Portrait}
                alt="portrait"
              />
            </div>
          </div>
        </div>
        <div className={styles.background_overflow}></div>
      </div>
    </ScrollableAnchor>
  )
}

export default About
