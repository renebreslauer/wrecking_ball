import React from 'react'
import styles from '../Contact/Contact.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function Contact() {
  return (
    <ScrollableAnchor id={'Contact'}>
      <div className={styles.contact_container}>
        <div className={styles.contact_container_header}>
          <h2>
            Still not convinced?&nbsp;&nbsp;
            <a href="">Let's try that again</a>
          </h2>
        </div>
        <div className={styles.contact_container_body}>
          <div className={styles.contact_container_info}>
            <h3>Rene Breslauer</h3>
            <p>(954) 609-2597</p>
            <p>Renebreslauer@me.com</p>
            <p>Download My Resume</p>
            <p>Source Code</p>
          </div>
          <div className={styles.contact_container_links}>
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact
