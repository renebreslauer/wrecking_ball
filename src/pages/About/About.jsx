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
          <div className={styles.about_container_content}>
            <Parallax className={styles.about_container_header} y={[-90, -20]}>
              <h1>Hi! I'm Rene.</h1>
            </Parallax>
            <Parallax classname={styles.about_container_text} y={[20, -30]}>
              <div classname={styles.about_container_body_text}>
                <p>
                  <span className={styles.emphasis_text}>
                    I am a frontend developer and visual designer who's obsessed
                    with building things.&nbsp;
                  </span>
                  Especially passionate about interactive user interfaces, I'm
                  always exploring new ways to combine web development,
                  illustration, and animation to elevate the user
                  experience.&nbsp;<br></br>
                  <span className={styles.emphasis_text}>
                    If I don't know how to do something, I figure it out.&nbsp;
                  </span>
                  I love challenges and tackling new technologies.
                </p>
              </div>
            </Parallax>
          </div>
          <div className={styles.about_container_portrait}>
            <img
              className={styles.portrait_image}
              src={Portrait}
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default About
